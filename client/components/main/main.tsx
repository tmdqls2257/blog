import React from 'react';
import styles from './main.module.css';
import 'swiper/css';
import Slider from './slider/slider';

const Main = () => {
  return (
    <main className={styles.portfolio} id="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Slider />
    </main>
  );
};

export default Main;
