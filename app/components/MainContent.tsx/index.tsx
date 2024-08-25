import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Heading } from '@/app/docs/layout';

interface MainContentProps {
  children: React.ReactNode;
  setHeadings: (headings: Heading[]) => void;
}

const MainContent: React.FC<MainContentProps> = ({ children, setHeadings }) => {
  const mainRef = useRef<HTMLDivElement>(null);
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
  }, [path, setHeadings]);

  return <main ref={mainRef}>{children}</main>;
};

export default MainContent;
