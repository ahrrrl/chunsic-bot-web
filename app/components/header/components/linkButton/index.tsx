import { CHUNSIC_BOT_URL } from '@/app/constants';
import Link from 'next/link';
import styles from './linkButton.module.scss';

export default function ServerLinkButton() {
  return (
    <Link href={CHUNSIC_BOT_URL} className={styles.button} target='_blank'>
      춘식봇 초대하기
    </Link>
  );
}
