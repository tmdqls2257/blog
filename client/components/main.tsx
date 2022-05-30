import React from 'react';
import styles from '../styles/css/main.module.css';
import SearchForm from './searchForm';
const Main = () => {
  return (
    <main className={styles.main}>
      <SearchForm suggestions={['1234', '2123', '3123123', '4']} />
    </main>
  );
};

export default Main;
