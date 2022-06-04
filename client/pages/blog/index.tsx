import React from 'react';
import Footer from '../../components/footer/footer';
import Bar from '../../components/header/bar/bar';
import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import Main from '../../components/main/main';
import styles from '../../styles/blog.module.css';
const Blog = () => {
  return (
    <>
      <Bar />
      <Header />
      <Intro />
      <Main />
      <Footer />
    </>
  );
};

export default Blog;
