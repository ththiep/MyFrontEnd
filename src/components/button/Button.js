// src/components/Button.js
import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, children, style, className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.baseButton} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;