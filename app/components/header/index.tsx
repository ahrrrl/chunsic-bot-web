'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';
import { usePathname } from 'next/navigation';
import DarkModeButton from './components/darkModeButton';
import { IMAGES } from '@/app/constants';

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
        <Link href='/' className={styles.logoBox}>
          <Image src={IMAGES.CHUNSIC_LOGO} alt='logo' width={44} height={44} />
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
        <DarkModeButton />
      </nav>
    </header>
  );
}
