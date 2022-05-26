import router from 'next/router';
import React from 'react';
import styles from '../../styles/css/blogIdx.module.css';

const Blog = () => {
  return (
    <section className={styles.body}>
      <header className={styles.header}>
        <img src="/images/study.png" alt="" />
      </header>
      <nav className={styles.nav}>
        <ul>
          <li>Daily</li>
          <li onClick={() => router.push('/blog/message')}>Chat</li>
          <li>Schedule</li>
          <li>Content</li>
          <li
            onClick={() => {
              console.log(process.env.NEXT_PUBLIC_PROFILE);
              window.open(process.env.NEXT_PUBLIC_PROFILE, '_blank');
            }}
          >
            Profile
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Blog;
