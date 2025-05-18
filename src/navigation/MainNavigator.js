// import React, { useContext } from 'react';
// import { AuthContext } from '../store/authContext';
// import AuthNavigator from './AuthNavigator';
// import DashboardNavigator from './DashboardNavigator'

// const MainNavigator = () => {
//   const { isAuthenticated } = useContext(AuthContext);

//   return isAuthenticated ? <DashboardNavigator /> : <AuthNavigator />;
// };

// export default MainNavigator;

import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../store/authContext';

import AuthContainer from '../features/auth/authContainer';
import DashboardContainer from '../features/dashboard/dashboardContainer';

const MainNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      {/* Nếu chưa đăng nhập */}
      {!isAuthenticated && (
        <>
          <Route path="/login" element={<AuthContainer mode="login" />} />
          <Route path="/register" element={<AuthContainer mode="register" />} />
          {/* Redirect các đường dẫn khác về login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}

      {/* Nếu đã đăng nhập */}
      {isAuthenticated && (
        <>
          <Route path="/dashboard" element={<DashboardContainer />} />
          {/* Redirect các đường dẫn khác về dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </>
      )}
    </Routes>
  );
};

export default MainNavigator;