import { IMAGES } from '@/app/constants';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <h1>일정 설정하기</h1>
      <p>알람 규칙 설정이 완료되었다면 이제 일정을 추가할 차례입니다.</p>

      <h2>/일정추가</h2>
      <p>
        일정추가에 필요한 값은 <code>날짜</code>, <code>시간</code>,
        <code>내용</code>입니다.
      </p>
      <table>
        <thead>
          <tr>
            <th>값</th>
            <th>형식</th>
            <th>예시( 9월 12일 오후 8시 30분)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>날짜</code>
            </td>
            <td>MM-DD 또는 YYYY-MM-DD</td>
            <td>09-12 또는 2024-09-12</td>
          </tr>
          <tr>
            <td>
              <code>시간</code>
            </td>
            <td>HH:MM</td>
            <td>20:30</td>
          </tr>
          <tr>
            <td>
              <code>내용</code>
            </td>
            <td>일정내용</td>
            <td>모여서 뚝스딱스 하기.</td>
          </tr>
        </tbody>
      </table>
      <p>
        알람 규칙이 설정되어 있다면 추가된 일정은 알람 규칙에 따라 정해진 시간에
        춘식이가 알려줍니다.
      </p>
      <h2>/일정보기</h2>
      <p>현재 서버에 저장되어 있는 일정들을 볼 수 있고 삭제할 수 있습니다.</p>
      <Image
        src={IMAGES.DOC_SCHUDULE_LIST}
        alt='일정보기사진'
        width={300}
        height={300}
      />
      <h2>/일정삭제</h2>
      <p>
        <code>/일정보기</code>를 거치지 않고 명령어를 바로 입력하고 삭제할
        일정의 번호(인덱스)를 적으면 해당 일정이 삭제됩니다.
      </p>
      <div className='warringBox'>
        주의! 1, 2, 3번의 인덱스 중 1번 인덱스를 삭제한다면 2번은 1번으로 3번은
        2번 인덱스로 변경됩니다.
      </div>
    </>
  );
}
