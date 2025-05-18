import React from 'react';
import styles from './Header.module.css';

const Header = ({ onUserFeature, onCampaignFeature, onLogout }) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftGroup}>
        <button className={styles.button} onClick={onUserFeature}>
          User Feature
        </button>
        <button className={styles.button} onClick={onCampaignFeature}>
          Campaign Feature
        </button>
      </div>
      <div className={styles.rightGroup}>
        <button className={styles.button} onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;