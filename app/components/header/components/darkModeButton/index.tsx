import { useEffect, useState } from 'react';
import styles from './darkModeButton.module.scss';
import moonIcon from '/public/img/icon/moon.svg';
import sunIcon from '/public/img/icon/sun.svg';
import Image from 'next/image';

export default function DarkModeButton() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };
  return (
    <div className={styles.switch}>
      <input
        type='checkbox'
        onChange={toggleTheme}
        checked={theme === 'dark'}
        className={styles.checkbox}
        id='checkbox'
      />
      <label htmlFor='checkbox' className={styles.label}>
        <div className={styles.ball}>
          <Image
            fill
            src={theme === 'dark' ? moonIcon : sunIcon}
            alt='theme icon'
          />
        </div>
      </label>
    </div>
  );
}
