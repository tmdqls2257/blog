import React from 'react';
import Footer from '../../components/footer';
import Slider from '../../components/slider';
import Main from '../../components/main';
import Header from '../../components/header';

import styles from '../../styles/css/blogIdx.module.css';

const Blog = () => {
  return (
    <>
      {/* <LoopTrue /> */}
      <Header />
      <Slider />
      <Main />
      <Footer />
    </>
  );
};

export default Blog;
