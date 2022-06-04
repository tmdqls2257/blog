import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slider.module.css';

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className={styles.slider}
    >
      <SwiperSlide>
        <img src={'/images/study.png'} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={'/images/study.png'} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={'/images/study.png'} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={'/images/study.png'} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
