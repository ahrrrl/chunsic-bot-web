import { CHUNSIC_BOT_URL, IMAGES } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import Button from '@/app/components/button';

export default function Page() {
  return (
    <>
      <h1>시작하기😆</h1>
      <p>
        기본적인 알람 규칙을 설정하고 일정을 등록하는 데 약 5분 정도의 학습
        시간이 소요됩니다.
      </p>
      <p>춘식이봇 요구사항</p>
      <p>- 디스코드 로그인</p>
      <p>- 적용할 디스코드 서버</p>
      <h2>디스코드 서버에 춘식이 봇 초대하기</h2>
      <p>춘식이 봇을 사용하고 싶은 서버에 춘식이를 초대합니다.</p>
      <div>
        <Link target='_blank' href={CHUNSIC_BOT_URL}>
          <div className='imgContainer'>
            <Image
              className={styles.inviteButton}
              src={IMAGES.CHUNSIC_LOGO}
              alt='춘식이 초대 버튼'
              width={80}
              height={80}
            />
          </div>
          <div className={styles.inviteBox}>
            <Button size='small' variant='secondary'>
              춘식이 초대하기
            </Button>
          </div>
        </Link>
      </div>
      <p>링크를 누르고 초대할 서버를 선택해주세요.</p>
      <div className={styles.imgContainer}>
        <Image
          className='imageRadius'
          src={IMAGES.DOC_START_SERVER}
          alt='서버 추가 사진'
          fill
          objectFit='contain'
        />
      </div>
      <h2>초대 및 작동 확인</h2>
      <p>
        디스코드 멤버 목록에 ChunsicService가 초록불이 들어와 있다면 작동을 하고
        있는겁니다!
      </p>
      <div className={styles.imgContainer}>
        <Image
          className='imageRadius'
          src={IMAGES.DOC_CHECK_CHUNSIC}
          alt='춘식이봇 확인'
          width={300}
          height={260}
          objectFit='contain'
        />
      </div>
      <h2>명령어 사용법</h2>
      <p>춘식이를 사용하기 위해서는 명령어(&#39;/&#39;)를 사용하셔야합니다.</p>
      <p>
        서버 채팅창에 (&#39;/&#39;)를 입력하면 디스코드 전체 명령어 리스트가
        나오며 좌측 상단에 춘식이 봇 로고를 누르면 춘식이 봇과 관련된 명령어만
        볼 수 있습니다.
      </p>
      <div className={styles.imgContainer}>
        <Image
          className='imageRadius'
          src={IMAGES.DOC_COMMANDS}
          alt='케먼드목록'
          fill
          objectFit='contain'
        />
      </div>
    </>
  );
}
