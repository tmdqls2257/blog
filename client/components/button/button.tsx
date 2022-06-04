import React from 'react';
import styles from './button.module.css';
type buttonType = {
  children: string;
  className?: string;
  onClick: () => void;
};

const Button = ({ children, className, onClick }: buttonType) => {
  return (
    <>
      <button
        onClick={onClick}
        className={className ? styles[className] : styles.button}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
