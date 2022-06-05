import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Button from '../button/button';
import Bar from './bar/sidebar';

// import Toggle from '../Toggle/Toggle';
import styles from './header.module.css';

const Header = () => {
  const router = useRouter();
  const btnClick = () => {
    console.log(1);
  };

  return (
    <header className={styles.wrapper} id={styles.Navbar}>
      {/* left */}
      <div className={styles.left}>
        <div className={styles.name}>Teogu</div>
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className={styles.right}>
        <div className={styles.menuContainer}>
          <ul className={styles.ul} style={{ listStyleType: 'none' }}>
            <li className={styles.list} onClick={() => router.push('/')}>
              <span>Home</span>
            </li>
            <li className={styles.list}>
              <span>Serivces</span>
            </li>
            <li className={styles.list}>
              <span>Experience</span>
            </li>
            <li
              className={styles.list}
              onClick={() => router.push(process.env.NEXT_PUBLIC_PROFILE!)}
            >
              <span>Protfolio</span>
            </li>
            <li className={styles.list}>
              <Bar />
            </li>
          </ul>
        </div>
        <Button onClick={btnClick}>signIn</Button>
      </div>
    </header>
  );
};

export default Header;
