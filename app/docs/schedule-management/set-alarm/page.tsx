import { IMAGES } from '@/app/constants';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <h1>알람 규칙 설정하기</h1>
      <p>
        서버 내의 일정과 관련해서 일괄적으로 적용되는 알람규칙을 설정할 수
        있습니다.
      </p>
      <h2>/알람설정추가</h2>
      <p>
        기입해야하는 값은 <code>타입</code>과 <code>시간</code>입니다. 일정
        당일을 기준으로 알람을 설정하고 싶다면 <code>타입</code>에
        <code>당일알림</code>을, 일정 시간을 기준으로 알람을 설정하고 싶다면
        <code>타입</code>에 <code>사전알림</code>을 선택해주세요.
      </p>
      <p>예시</p>
      <table>
        <thead>
          <tr>
            <th>값</th>
            <th>설정 내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>타입</code> 당일알림, <code>시간</code> 09:00
            </td>
            <td>일정이 있는 날 오전 9시에 해당 일정을 알려줍니다.</td>
          </tr>
          <tr>
            <td>
              <code>타입</code> 당일알림, <code>시간</code> 13:00
            </td>
            <td>일정이 있는 날 오후 1시에 해당 일정을 알려줍니다.</td>
          </tr>
          <tr>
            <td>
              <code>타입</code> 사전알림, <code>시간</code> 00:00
            </td>
            <td>일정이 있는 날, 일정 시간에 알려줍니다.</td>
          </tr>
          <tr>
            <td>
              <code>타입</code> 사전알림, <code>시간</code> 00:30
            </td>
            <td>일정이 있는 날, 일정 30분 전에 알려줍니다.</td>
          </tr>
        </tbody>
      </table>
      <div className='warringBox'>
        주의! 알람이 설정되기 전에 존재하는 일정에는 알람이 적용되지 않습니다.
      </div>
      <h2>/알람설정보기</h2>
      <p>
        현재 서버에 설정된 모든 알람 시간을 확인하고, 필요 시 삭제할 수
        있습니다.
      </p>
      <div className='imgContainer'>
        <Image
          className='imageRadius'
          src={IMAGES.DOC_ALARM_SETTING}
          alt='알람설정보기사진'
          width={300}
          height={300}
        />
      </div>
      <p>
        알람 삭제 버튼을 클릭하면, 삭제할 알람의 번호(인덱스)를 입력할 수 있는
        창이 나타납니다.
      </p>
      <div className='warringBox'>
        주의! 1, 2, 3번의 인덱스 중 1번 인덱스를 삭제한다면 2번은 1번으로 3번은
        2번 인덱스로 변경됩니다.
      </div>
    </>
  );
}
