import React, { useEffect, useRef } from 'react';
import styles from '@/app/docs/docs.module.scss';
import { RightSidebarProps } from './types';

export default function RightSidebar({
  headings,
  handleClick,
}: RightSidebarProps) {
  const headingElementsRef = useRef<{ [key: string]: HTMLLIElement | null }>(
    {}
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            headingElementsRef.current[id]?.classList.add(styles.active);
          } else {
            headingElementsRef.current[id]?.classList.remove(styles.active);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' } // Adjust this value as needed
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  return (
    <ul>
      {headings.map((heading) => (
        <li
          key={heading.id}
          ref={(el) => {
            headingElementsRef.current[heading.id] = el;
          }}
          className={heading.level === 2 ? styles.level2 : ''}
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
}
