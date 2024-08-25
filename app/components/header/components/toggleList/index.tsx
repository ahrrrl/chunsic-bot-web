import { useEffect, useRef, RefObject } from 'react';
import Link from 'next/link';
import { links } from '../..';
import styles from './toggleList.module.scss';
import { CHUNSIC_BOT_URL } from '@/app/constants';

interface ToggleListProps {
  setMenuOpen: (open: boolean) => void;
}

export default function ToggleList({ setMenuOpen }: ToggleListProps) {
  const listRef: RefObject<HTMLUListElement> = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setMenuOpen]);

  return (
    <div className={styles.fullScreenList}>
      <ul ref={listRef}>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} onClick={() => setMenuOpen(false)}>
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={CHUNSIC_BOT_URL}
            target='_blank'
            onClick={() => setMenuOpen(false)}
          >
            춘식봇 초대하기
          </Link>
        </li>
      </ul>
    </div>
  );
}
