import React, { useContext } from 'react';
import { AuthContext } from '../store/authContext';
import AuthNavigator from './AuthNavigator';
import DashboardNavigator from './DashboardNavigator'

const MainNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <DashboardNavigator /> : <AuthNavigator />;
};

export default MainNavigator;