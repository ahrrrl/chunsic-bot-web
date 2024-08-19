'use client';

import React, { useState } from 'react';
import styles from './docs.module.scss';
import { toc } from './toc';
import RightSidebar from '../components/rightSidebar';
import LeftSidebar from '../components/leftSidebar';
import MainContent from '../components/MainContent.tsx';

export interface Heading {
  id: string;
  text: string;
  level: number;
  children?: Heading[];
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.docs}>
      <aside className={`${styles.sidebar} ${styles.left}`}>
        <div>전체 페이지 목차</div>
        <LeftSidebar toc={toc} />
      </aside>
      <div className={styles.mainContent}>
        <MainContent setHeadings={setHeadings}>{children}</MainContent>
      </div>
      <aside className={`${styles.sidebar} ${styles.right}`}>
        <RightSidebar headings={headings} handleClick={handleClick} />
      </aside>
    </div>
  );
}
