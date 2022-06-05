import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { slidestate } from '../../../store/store';
import styles from './sidebar.module.css';

const Bar = () => {
  const [hamburger, setHamburger] = useState(false);

  const [navSlidestate, setNavSlidestate] = useRecoilState(slidestate);
  return (
    <nav className={!hamburger ? styles.navBar : styles.activedNavbar}>
      <div className={styles.hamburgerContainer}>
        <div
          className={styles.hamburgerBox}
          onClick={() => {
            hamburger ? setHamburger(false) : setHamburger(true);
            hamburger ? setNavSlidestate(false) : setNavSlidestate(true);
          }}
        >
          <span
            className={hamburger ? styles.hamburgerLine1 : styles.hamburgerLine}
          ></span>
          <span
            className={hamburger ? styles.hamburgerLine2 : styles.hamburgerLine}
          ></span>
          <span
            className={hamburger ? styles.hamburgerLine3 : styles.hamburgerLine}
          ></span>
        </div>
      </div>
    </nav>
  );
};

export default Bar;
