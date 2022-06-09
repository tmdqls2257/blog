import React from 'react';
import { useRecoilState } from 'recoil';
import Footer from '../../components/footer/footer';
import NavSlide from '../../components/header/bar/slide/navSlide';
import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import Main from '../../components/main/main';
import { slidestate } from '../../store/store';

import styles from '../../styles/blog.module.css';
const Blog = () => {
  const [navSlidestate, setNavSlidestate] = useRecoilState(slidestate);
  return (
    <>
      <Header />
      {navSlidestate && <NavSlide />}
      <Intro />
      <Main />
      <Footer />
    </>
  );
};

export default Blog;
