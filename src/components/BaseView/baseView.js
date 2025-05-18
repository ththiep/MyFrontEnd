import React from 'react';
import Header from '../Header/Header';
import styles from './baseView.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../store/authContext';

const BaseView = ({ children }) => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleUserFeature = () => {
    navigate('/user');
  };

  const handleCampaignFeature = () => {
    navigate('/campaign');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <Header
        onUserFeature={handleUserFeature}
        onCampaignFeature={handleCampaignFeature}
        onLogout={handleLogout}
      />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default BaseView;