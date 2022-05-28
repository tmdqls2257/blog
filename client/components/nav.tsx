import router from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../styles/css/nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavbarMenu from './navbarMenu';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Nav = () => {
  const [click, setClick] = useState(false);

  const barClick = () => {
    click ? setClick(false) : setClick(true);
  };

  return (
    <>
      <nav className={styles.navbar}>
        {/* 모바일버전에서 클릭하면 메뉴 보이도록 설정하는 것도 한다. (close Mobile Menu)는 다시 버튼 누르면 없어지고 생기고 하도록 한다.  */}
        <div className={styles.container}>
          <div className={styles.logo}></div>
          <FontAwesomeIcon
            className={styles.hamburger}
            onClick={barClick}
            icon={faBars}
          />
        </div>

        {click && <NavbarMenu />}
      </nav>
    </>
  );
};

export default Nav;
