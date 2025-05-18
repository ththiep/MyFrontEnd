// src/components/TextButton.js
import React from 'react';
import styles from './Button.module.css';

const TextButton = ({ onClick, children, className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.textButton} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default TextButton;