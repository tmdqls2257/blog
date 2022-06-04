import React, { useState } from 'react';
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap';
import styles from './bar.module.css';
const Bar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
      {hamburger ? (
        <div className={styles.hamburger_container}>
          <div
            className={styles.hamburger_box}
            onClick={() => setHamburger(false)}
          >
            <span className={styles.hamburger_line1}></span>
            <span className={styles.hamburger_line2}></span>
            <span className={styles.hamburger_line3}></span>
          </div>
        </div>
      ) : (
        <div className={styles.hamburger_container}>
          <div
            className={styles.hamburger_box}
            onClick={() => setHamburger(true)}
          >
            <span className={styles.hamburger_line}></span>
            <span className={styles.hamburger_line}></span>
            <span className={styles.hamburger_line}></span>
          </div>
        </div>
      )}
    </>
  );
};

export default Bar;
