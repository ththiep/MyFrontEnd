import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthContainer from '../features/auth/authContainer';

const AuthNavigator = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="/login" element={<AuthContainer mode="login" />} />
    <Route path="/register" element={<AuthContainer mode="register" />} />
  </Routes>
);

export default AuthNavigator;
