'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';
import { usePathname } from 'next/navigation';
import DarkModeButton from './components/darkModeButton';
import { IMAGES } from '@/app/constants';
import SearchBar from '../searchBar';
import ServerLinkButton from './components/linkButton';
import { useState } from 'react';
import ToggleList from './components/toggleList';
import MenuButton from './components/menuButton';

export const links = [
  {
    name: 'Docs',
    href: '/docs',
  },
  {
    name: '함께하는 서버들',
    href: '/participation',
  },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.navLink}>
          <Link href='/' className={styles.logoBox}>
            <Image
              src={IMAGES.CHUNSIC_LOGO}
              alt='logo'
              width={44}
              height={44}
            />
            춘식봇
          </Link>

          <div className={styles.navList}>
            {links.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className={
                  pathname === href || pathname.startsWith(href)
                    ? styles.active
                    : ''
                }
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.navRightBox}>
          <SearchBar />
          <div className={styles.navButton}>
            <ServerLinkButton />
            <DarkModeButton />
          </div>
          <MenuButton setMenuOpen={setMenuOpen} />
        </div>
      </nav>
      {menuOpen && <ToggleList setMenuOpen={setMenuOpen} />}
    </header>
  );
}
