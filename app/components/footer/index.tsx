import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <p>© 2024 춘식봇. All rights reserved.</p>
          <p>디스코드 봇으로 일정을 관리하고 알람을 받으세요.</p>
        </div>
        <div className={styles.links}>
          <Link href='/docs'>문서</Link>
          <Link href='/privacy'>개인정보처리방침</Link>
          <Link href='/terms'>이용약관</Link>
          <Link href='https://forms.gle/x1yPoKcqdVa5d4if7'>문의 및 건의</Link>
        </div>
      </div>
    </footer>
  );
}
