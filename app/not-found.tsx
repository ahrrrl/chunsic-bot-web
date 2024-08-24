import Link from 'next/link';
import styles from './page.module.scss';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.textContainer}>
        <h2>페이지를 찾을 수 없습니다</h2>
        <p>페이지가 없거나 현재 준비중인 페이지입니다.</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href='/'>
          <button>홈페이지 가기</button>
        </Link>
      </div>
    </div>
  );
}
