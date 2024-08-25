'use client';

import React, { useState } from 'react';
import styles from './docs.module.scss';
import { toc } from './toc';
import RightSidebar from '../components/rightSidebar';
import LeftSidebar from '../components/leftSidebar';
import MainContent from '../components/MainContent.tsx';
import Link from 'next/link';
import ChildrenCard from '../components/childrenCard';

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
        <Link href='/docs'>
          <div className={styles.docTitleBox}>
            <span className={styles.docTitle}>춘식이 1.0 설명서</span>
          </div>
        </Link>
        <LeftSidebar toc={toc} />
      </aside>
      <div className={styles.mainContent}>
        <MainContent setHeadings={setHeadings}>
          {children}
          <ChildrenCard toc={toc} />
        </MainContent>
      </div>
      <aside className={`${styles.sidebar} ${styles.right}`}>
        <RightSidebar headings={headings} handleClick={handleClick} />
      </aside>
    </div>
  );
}
