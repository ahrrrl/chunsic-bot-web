'use client';

import styles from './guildList.module.scss';
import { ITEMS_PER_PAGE } from '@/app/constants';
import { SkeletonCard } from '../skeletonCard';
import { useGuildStore } from '@/app/lib/store/reactQuery';
import { useIntersectionObserver } from '../useIntersectionObserver';
import React from 'react';
import GuildCard from '../guildCard';

export function GuildList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isLoading,
  } = useGuildStore();

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const ref = useIntersectionObserver(loadMore);

  if (status === 'error') return <div>Error fetching guilds</div>;

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.data.map((guild) => (
              <GuildCard key={guild._id} guild={guild} />
            ))}
          </React.Fragment>
        ))}
        {isLoading && (
          <>
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </>
        )}
      </div>
      <div ref={ref} className={styles.endMessage}>
        {isLoading
          ? 'Loading...'
          : isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load More'
          : '이용해주셔서 감사합니다!'}
      </div>
    </div>
  );
}
