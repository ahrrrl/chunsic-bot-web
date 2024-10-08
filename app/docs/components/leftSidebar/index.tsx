import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/app/docs/docs.module.scss';
import { TocItem } from '@/types/common';
import { LeftSidebarProps } from './types';

export default function LeftSidebar({ toc }: LeftSidebarProps) {
  const pathname = usePathname();
  const renderTOC = (toc: TocItem[]) => {
    return (
      <ul className={styles.leftSidebarBox}>
        {toc.map((item) => (
          <li key={item.url} className={item.level === 2 ? styles.level2 : ''}>
            <Link
              className={pathname === item.url ? styles.active : 'active'}
              href={`${item.url}`}
            >
              {item.text}
            </Link>
            {item.children && renderTOC(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  return <>{renderTOC(toc)}</>;
}
