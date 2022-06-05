import React from 'react';
import { atom, useRecoilState } from 'recoil';
import Footer from '../../components/footer/footer';
import NavSlide from '../../components/header/bar/slide/navSlide';
import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import Main from '../../components/main/main';
import styles from '../../styles/blog.module.css';
const Blog = () => {
  const slidestate = atom({
    key: 'slidestate',
    default: false,
  });
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
