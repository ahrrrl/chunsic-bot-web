import { Heading } from '@/app/docs/layout';
import React from 'react';

interface RightSidebarProps {
  headings: Heading[];
  handleClick: (id: string) => void;
}

export default function RightSidebar({
  headings,
  handleClick,
}: RightSidebarProps) {
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
}
