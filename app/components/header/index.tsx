'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'Docs',
    href: '/docs',
  },
  {
    name: '기타',
    href: '/github',
  },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logoBox}>
          <Link href='/'>
            <Image src='/chunsic-logo.png' alt='logo' width={44} height={44} />
          </Link>
          춘식이 봇
        </div>
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
      </nav>
    </header>
  );
}
