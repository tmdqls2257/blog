import { faBars, faBurger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../button/button';

// import Toggle from '../Toggle/Toggle';
import styles from './header.module.css';

type typeOfHeader = {
  data: string;
};

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
        <div>
          <ul className={styles.ul} style={{ listStyleType: 'none' }}>
            <li className={styles.list} onClick={() => router.push('/')}>
              <p>Home</p>
            </li>
            <li className={styles.list}>
              <p>Serivces</p>
            </li>
            <li className={styles.list}>
              <p>Experience</p>
            </li>
            <li
              className={styles.list}
              onClick={() => router.push(process.env.NEXT_PUBLIC_PROFILE!)}
            >
              <p>Protfolio</p>
            </li>
          </ul>
        </div>
        <Button onClick={btnClick}>signIn</Button>
      </div>
    </header>
  );
};

export default Header;
