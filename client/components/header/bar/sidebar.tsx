import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { slidestate } from '../../../store/store';
import styles from './sidebar.module.css';

const Bar = () => {
  const [navSlidestate, setNavSlidestate] = useRecoilState(slidestate);
  return (
    <nav className={!navSlidestate ? styles.navBar : styles.activedNavbar}>
      <div className={styles.hamburgerContainer}>
        <div
          className={styles.hamburgerBox}
          onClick={() => {
            navSlidestate ? setNavSlidestate(false) : setNavSlidestate(true);
          }}
        >
          <span
            className={
              navSlidestate ? styles.hamburgerLine1 : styles.hamburgerLine
            }
          ></span>
          <span
            className={
              navSlidestate ? styles.hamburgerLine2 : styles.hamburgerLine
            }
          ></span>
          <span
            className={
              navSlidestate ? styles.hamburgerLine3 : styles.hamburgerLine
            }
          ></span>
        </div>
      </div>
    </nav>
  );
};

export default Bar;
