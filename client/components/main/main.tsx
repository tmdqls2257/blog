import React, { useState } from 'react';
import styles from './main.module.css';
import 'swiper/css';
import Slider from './slider/slider';
import InfiniteScroll from './infiniteScroll/infiniteScroll';
// import InfiniteScroll from './infiniteScroll/infiniteScroll';

const Main = () => {
  return (
    <main className={styles.portfolio} id="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      {/* <Slider /> */}
      <div className={styles.infiniteSrollCotainer} id="root">
        <InfiniteScroll />
      </div>
    </main>
  );
};

export default Main;
