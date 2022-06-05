import React from 'react';
import { SidebarData } from './sidebarData';
import styles from './navSlide.module.css';
import { atom, useRecoilState } from 'recoil';

type category = {
  title: string;
  path: string;
  icon: string;
  categoryName: string;
};

const NavSlide = () => {
  const slidestate = atom({
    key: 'slidestate',
    default: false,
  });
  const [navSlidestate, setNavSlidestate] = useRecoilState(slidestate);
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
