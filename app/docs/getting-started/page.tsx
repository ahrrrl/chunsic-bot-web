import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>시작하기</h1>
      <p>춘식이봇 요구사항</p>
      <p>- 디스코드 로그인</p>
      <p>- 적용할 디스코드 서버</p>
      <h2>디스코드 서버에 춘식이 봇 초대하기</h2>
      <p>춘식이 봇을 사용하고 싶은 서버에 춘식이를 초대합니다.</p>
      <div>
        <Link
          target='_blank'
          href='https://discord.com/oauth2/authorize?client_id=1271278938911408228&permissions=0&integration_type=0&scope=bot+applications.commands'
        >
          <Image
            src='/chunsic-logo.png'
            alt='춘식이 초대 버튼'
            width={80}
            height={80}
          />
          <span className='activate'>춘식이 초대하기</span>
        </Link>
      </div>
      <p>링크를 누르고 초대할 서버를 선택해주세요.</p>
      <Image
        src='/img/doc/서버추가사진.png'
        alt='서버 추가 사진'
        width={500}
        height={800}
      />

      <h2>초대 및 작동 확인</h2>
      <p>
        디스코드 멤버 목록에 ChunsicService가 초록불이 들어와 있다면 작동을 하고
        있는겁니다!
      </p>
      <Image
        src='/img/doc/서버추가확인사진.png'
        alt='춘식이봇 확인'
        width={300}
        height={200}
      />
    </>
  );
}
