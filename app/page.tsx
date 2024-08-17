import React from 'react';
import styles from './page.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>춘식봇에 오신 것을 환영합니다!</h1>
      <p>디스코드 서버를 관리하고 다양한 기능을 제공하는 봇입니다.</p>
    </div>
  );
};

export default Home;
