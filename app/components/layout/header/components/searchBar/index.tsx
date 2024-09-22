import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styles from './searchbar.module.scss';
import Link from 'next/link';
import { toc, TocItem } from '@/app/docs/toc';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<TocItem[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const searchToc = useCallback((items: TocItem[], term: string): TocItem[] => {
    return items.reduce((acc: TocItem[], item) => {
      if (item.text.toLowerCase().includes(term.toLowerCase())) {
        const matchedItem = {
          ...item,
          children: item.children?.map((child) => ({ ...child, children: [] })),
        };
        acc.push(matchedItem);
      } else if (item.children) {
        const childMatches = searchToc(item.children, term);
        if (childMatches.length > 0) {
          acc.push({ ...item, children: childMatches });
        }
      }
      return acc;
    }, []);
  }, []);

  const flattenResults = useCallback((items: TocItem[]): TocItem[] => {
    return items.reduce((acc: TocItem[], item) => {
      acc.push(item);
      if (item.children) {
        acc.push(...flattenResults(item.children));
      }
      return acc;
    }, []);
  }, []);

  const filteredResults = useMemo(() => {
    if (searchTerm.trim() === '') return [];
    const results = searchToc(toc, searchTerm);
    return flattenResults(results);
  }, [searchTerm, searchToc, flattenResults]);

  useEffect(() => {
    setSearchResults(filteredResults);
    setFocusedIndex(filteredResults.length > 0 ? 0 : -1);
  }, [filteredResults]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchResults.length === 0) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setFocusedIndex((prev) =>
          prev < searchResults.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        if (focusedIndex >= 0) {
          window.location.href = searchResults[focusedIndex].url;
        }
        break;
    }
  };

  const handleBlur = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  const handleMouseEnter = (index: number) => {
    setFocusedIndex(index);
  };

  return (
    <div className={styles.searchbar}>
      <input
        type='text'
        placeholder='검색어를 입력하세요'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
      {searchResults.length > 0 && (
        <div className={styles.searchResults}>
          <ul>
            {searchResults.map((item, index) => (
              <li
                key={`${item.url}-${index}`}
                className={`${index === focusedIndex ? styles.focused : ''} ${
                  styles[`level${item.level}`]
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <Link
                  href={item.url}
                  onClick={() => setSearchTerm('')}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
