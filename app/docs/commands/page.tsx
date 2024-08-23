import { IMAGES } from '@/app/constants';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <h1>명령어</h1>
      <p>춘식이를 사용하기 위해서는 명령어(&#39;/&#39;)를 사용하셔야합니다.</p>
      <h2>명령어 사용법</h2>
      <p>
        서버 채팅창에 (&#39;/&#39;)를 입력하면 디스코드 전체 명령어 리스트가
        나오며 좌측 상단에 춘식이 봇 로고를 누르면 춘식이 봇과 관련된 명령어만
        볼 수 있습니다.
      </p>
      <Image
        src={IMAGES.DOC_COMMANDS}
        alt='케먼드목록'
        width={600}
        height={300}
      />
    </>
  );
}
