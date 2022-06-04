import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styles from './intro.module.css';
import Button from '../button/button';

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: 'spring' };

  return (
    <div className={styles.Intro} id="Intro">
      {/* left name side */}
      <div className={styles.left}>
        <div className={styles.name}>
          {/* yahan change hy darkmode ka */}
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
        {/* social icons */}
      </div>
      {/* right image side */}
      <div className={styles.right}>
        <img src={'/images/Vetor1.png'} alt="" />
        <img src={'/images/Vetor2.png'} alt="" />
        {/* <img src={boy} alt="" /> */}
        {/* animation */}
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={'./images/glassesimoji.png'}
          alt=""
        />

        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          className={styles.floatingDiv}
        ></motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: '9rem', top: '18rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          className={styles.floatingDiv}
        ></motion.div>

        <div
          className={styles.blur}
          style={{ background: 'rgb(238 210 255)' }}
        ></div>
        <div
          className={styles.blur}
          style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
