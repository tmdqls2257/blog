import React from 'react';
import { SidebarData } from './sidebarData';
import styles from './navSlide.module.css';

type category = {
  title: string;
  path: string;
  icon: string;
  categoryName: string;
};

const NavSlide = () => {
  return (
    <div className={styles.slideContainer}>
      {SidebarData.map((item: category, idx) => {
        return (
          <li key={idx} className={styles[item.categoryName]}>
            {item.title}
          </li>
        );
      })}
    </div>
  );
};

export default NavSlide;
