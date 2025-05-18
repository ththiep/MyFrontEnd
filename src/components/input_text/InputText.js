import React from 'react';
import styles from './InputText.module.css';

const InputText = ({
  className = '',
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  ...props
}) => {
  if (label) {
    return (
      <div className={styles.inputContainer}>
        <label className={styles.label}>{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${styles.inputField} ${error ? styles.inputError : ''} ${className}`}
          {...props}
        />
        <p className={styles.errorText} aria-live="polite">
          {error || '\u00A0'}
        </p>
      </div>
    );
  }

  // Không có label
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.inputField} ${error ? styles.inputError : ''} ${className}`}
        {...props}
      />
      <p className={styles.errorText} aria-live="polite">
        {error || '\u00A0'}
      </p>
    </>
  );
};

export default InputText;