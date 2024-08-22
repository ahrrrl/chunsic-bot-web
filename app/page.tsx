import React from 'react';
import styles from './page.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>
        디스코드 일정 관리 및 알람의 <br />
        탁월한 선택
      </h1>
      <p>
        디스코드 서버에서 일정을 관리하고 <br />
        멤버들에게 알람을 보내주는 견실한 봇
      </p>
    </div>
  );
};

export default Home;
