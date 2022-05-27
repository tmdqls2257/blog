import router from 'next/router';
import React from 'react';
import styles from '../styles/css/header.module.css';
import Nav from './nav';

const Header = () => {
  return (
    <section className={styles.body}>
      <Nav />
      <header className={styles.header}>
        <img src="/images/study.png" alt="" />
      </header>
    </section>
  );
};

export default Header;
