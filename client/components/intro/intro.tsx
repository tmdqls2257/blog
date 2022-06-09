import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styles from './intro.module.css';
import Button from '../button/button';

const Intro = () => {
  return (
    <div className={styles.Intro} id="Intro">
      <div className={styles.left}>
        <div className={styles.name}>
          <span>Hy! I Am</span>
          <span>Teogu</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <Button className="introBtn" onClick={() => console.log(1)}>
            Hire me
          </Button>
        </Link>
      </div>

      <div className={styles.right}>
        <div className={styles.blur}></div>
        <div
          className={styles.blur}
          style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            right: '9rem',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
