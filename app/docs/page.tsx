import React from 'react';
import styles from './docs.module.scss';

const Docs = () => {
  return (
    <section>
      <h1>소개</h1>
      <p>춘식이 사용 설명서에 오신걸 환영합니다!</p>
      <h2>춘식이 봇이란?</h2>
      <p>
        춘식이 봇은 디스코드 서버 내에서 일정을 관리하고 정해진 시간에 자동으로
        사용자에게 메시지를 보내주는 봇입니다.
      </p>
      <h2>주요 기능</h2>
      <p>춘식이 봇은 다음과 같은 기능을 제공합니다.</p>
      <table>
        <thead>
          <tr>
            <th>기능</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.feature}>알람 시간 설정</td>
            <td>사용자가 원하는 시간에 알람을 설정할 수 있습니다.</td>
          </tr>
          <tr>
            <td className={styles.feature}>일정 등록</td>
            <td>중요한 일정을 등록하고 알림을 받을 수 있습니다.</td>
          </tr>
          <tr>
            <td className={styles.feature}>메시지 관리</td>
            <td>자동으로 메시지를 관리하고 정리합니다(준비중).</td>
          </tr>
          <tr>
            <td className={styles.feature}>역할 부여</td>
            <td>특정 조건에 따라 자동으로 역할을 부여합니다(준비중).</td>
          </tr>
          <tr>
            <td className={styles.feature}>통계 제공</td>
            <td>서버 활동에 대한 통계를 제공합니다(준비중).</td>
          </tr>
        </tbody>
      </table>
      <h2>문서 사용 방법</h2>
      <p>
        화면 왼쪽에 문서 탐색 바가 있습니다. 문서 페이지는 춘식이 봇을 사용자의
        디스코드 서버에 연결하는 방법부터 사용하기 위한 명령어 설정들이
        순차적으로 구성되어 있습니다. 그러나 원하는 순서대로 읽거나 필요한
        부분만 읽어도 상관없습니다.
      </p>
      <p>
        화면 오른쪽에는 페이지의 섹션 사이를 쉽게 이동할 수 있는 목차가
        표시됩니다.
      </p>
    </section>
  );
};

export default Docs;
