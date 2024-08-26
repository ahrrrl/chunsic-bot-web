'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { BASE_URL, IMAGES } from '../constants';
import { IGuild } from '../lib/mongodb/types';

const ITEMS_PER_PAGE = 8;

function useIntersectionObserver(callback: () => void) {
  const observer = useRef<IntersectionObserver | null>(null);
  const ref = useCallback(
    (node: Element | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) callback();
      });
      if (node) observer.current.observe(node);
    },
    [callback]
  );
  return ref;
}

function GuildCard({ guild }: { guild: IGuild }) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={guild.icon || IMAGES.DISCORD_ICON}
        alt={`${guild.name} 이미지`}
        width={100}
        height={100}
        priority
      />
      <h2>{guild.name}</h2>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className={`${styles.card} ${styles.skeleton}`}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonText}></div>
    </div>
  );
}

export default function Page() {
  const [data, setData] = useState<IGuild[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchGuilds = useCallback(
    async (pageNum: number) => {
      if (!hasMore) return;
      setLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}/api/getGuilds?page=${pageNum}&limit=${ITEMS_PER_PAGE}`
        );
        const {
          data: newData,
          hasMore: moreData,
        }: { data: IGuild[]; hasMore: boolean } = await response.json();
        setData((prev) => (pageNum === 1 ? newData : [...prev, ...newData]));
        setPage(pageNum);
        setHasMore(moreData);
      } catch (error) {
        console.error('Failed to fetch guilds:', error);
      } finally {
        setLoading(false);
      }
    },
    [hasMore]
  );

  useEffect(() => {
    fetchGuilds(1);
  }, [fetchGuilds]);

  const loadMoreRef = useIntersectionObserver(() => {
    if (!loading && hasMore) {
      fetchGuilds(page + 1);
    }
  });

  return (
    <div className={styles.container}>
      <h1>참여하고 있는 서버</h1>
      <div className={styles.cards}>
        {data.map((guild) => (
          <GuildCard key={guild._id} guild={guild} />
        ))}
        {loading &&
          Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
            <SkeletonCard key={`skeleton-${index}`} />
          ))}
      </div>
      {hasMore ? (
        <div ref={loadMoreRef} className={styles.loader}>
          {loading ? 'Loading...' : 'Load more'}
        </div>
      ) : (
        <div className={styles.endMessage}>이용해주셔서 감사합니다!</div>
      )}
    </div>
  );
}
