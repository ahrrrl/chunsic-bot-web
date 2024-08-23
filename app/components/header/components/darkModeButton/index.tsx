import { useEffect, useState } from 'react';
import styles from './darkModeButton.module.scss';
import Image from 'next/image';
import { IMAGES } from '@/app/constants';

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
            src={theme === 'dark' ? IMAGES.MOON_ICON : IMAGES.SUN_ICON}
            alt='theme icon'
          />
        </div>
      </label>
    </div>
  );
}
