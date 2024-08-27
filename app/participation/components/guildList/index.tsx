'use client';

import { useCallback, useEffect, useState } from 'react';
import styles from './guildList.module.scss';
import { IGuild } from '@/app/lib/mongodb/types';
import { BASE_URL, IMAGES, ITEMS_PER_PAGE } from '@/app/constants';
import { useIntersectionObserver } from '../useIntersectionObserver';
import { SkeletonCard } from '../skeletonCard';
import Image from 'next/image';

export function GuildList() {
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
