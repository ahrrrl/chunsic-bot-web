'use client';

// app/docs/layout.tsx
import React, { use, useEffect, useRef, useState } from 'react';
import styles from './docs.module.scss';
import { toc, TocItem } from './toc';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Heading {
  id: string;
  text: string;
  level: number;
  children?: Heading[]; // children 속성 추가
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const path = usePathname();

  useEffect(() => {
    if (mainRef.current) {
      const headingElements =
        mainRef.current.querySelectorAll<HTMLHeadingElement>('h1, h2');
      const headingsArray = Array.from(headingElements).map(
        (heading, index) => {
          const id = `heading-${index}`;
          heading.setAttribute('id', id);
          return {
            id,
            text: heading.innerText,
            level: heading.tagName === 'H1' ? 1 : 2,
          };
        }
      );
      setHeadings(headingsArray);
    }
  }, [path, children]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderHeadings = (headings: Heading[]) => {
    return (
      <ul>
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: heading.level === 2 ? '20px' : '0' }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(heading.id);
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const renderTOC = (toc: TocItem[]) => {
    return (
      <ul>
        {toc.map((item) => (
          <li
            key={item.url}
            style={{ marginLeft: item.level === 2 ? '20px' : '0' }}
          >
            <Link href={`/${item.url}`}>{item.text}</Link>
            {item.children && renderTOC(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.docs}>
      <aside className={styles.sidebar}>
        <div>전체 페이지 목차</div>
        {renderTOC(toc)}
      </aside>
      <main ref={mainRef} className={styles.main}>
        {children}
      </main>
      <aside className={styles.sidebar}>
        <div>현재 페이지 목차</div>
        {renderHeadings(headings)}
      </aside>
    </div>
  );
}
