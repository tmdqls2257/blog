import React from 'react';
import styles from './sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={styles.navbar}>
      <input className={styles.menuicon} type="checkbox" />
      <label htmlFor="menuicon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className={styles.sidebar}></div>
    </nav>
  );
};

export default Sidebar;
