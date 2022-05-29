import React from 'react';
import styles from '../styles/css/footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className={styles.footershapeFill}
        >
          <section>footer</section>
        </path>
      </svg>
    </footer>
  );
};

export default Footer;
