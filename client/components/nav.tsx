import router from 'next/router';
import React from 'react';
import styles from '../styles/css/nav.module.css';
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <button onClick={() => router.push('/blog/message')}>tweet</button>
      <button>Schedule</button>
      <button>JavaScript</button>
      <button>CSS</button>
      <button>HTML</button>
      <button
        onClick={() => {
          window.open(process.env.NEXT_PUBLIC_PROFILE, '_blank');
        }}
      >
        profile
      </button>
    </nav>
  );
};

export default Nav;
