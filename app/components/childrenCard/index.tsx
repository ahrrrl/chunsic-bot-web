import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './childrenCard.module.scss';
import { ChildrenCardProps, TocCardProps } from './types';
import { TocItem } from '@/types/common';

const TocCard = ({ item }: TocCardProps) => (
  <Link href={item.url} className={styles.card}>
    <h3>{item.text}</h3>
    <p>{item.description}</p>
  </Link>
);

const ChildrenCard = ({ toc }: ChildrenCardProps) => {
  const pathname = usePathname();

  const parentItem = toc.find((item: TocItem) => item.url === pathname);

  if (!parentItem || !parentItem.children) {
    return null;
  }

  return (
    <div className={styles.cardContainer}>
      {parentItem.children.map((child) => (
        <TocCard key={child.url} item={child} />
      ))}
    </div>
  );
};

export default ChildrenCard;
