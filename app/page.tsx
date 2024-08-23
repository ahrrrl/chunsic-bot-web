import styles from './page.module.scss';
import Image from 'next/image';
import { CHUNSIC_BOT_URL, IMAGES } from './constants';
import Link from 'next/link';
import TypingText from './components/typingText';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.textContainer}>
        <h1>춘식봇</h1>
        <div className={styles.descriptionBox}>
          <TypingText text='디스코드 일정 관리 및 알람의 탁월한 선택' />
        </div>
        {/* <p>
          디스코드 서버에서 일정을 관리하고 <br />
          멤버들에게 알람을 보내주는 견실한 봇
        </p> */}
      </div>
      <div className={styles.buttonContainer}>
        <Link target='_blank' href={CHUNSIC_BOT_URL}>
          <button>춘식봇 서버에 초대</button>
        </Link>
        <Link href='/docs'>
          <button>춘식봇 배우기</button>
        </Link>
      </div>
      <div className={styles.chunsikImageContainer}>
        <Image
          fill
          objectFit='contain'
          src={IMAGES.CHUNSIC_MAIN}
          alt='춘식봇 메인 사진'
        />
      </div>
    </div>
  );
};

export default Home;
