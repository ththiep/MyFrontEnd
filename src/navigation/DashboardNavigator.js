import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardContainer from '../features/dashboard/dashboardContainer';

const DashboardNavigator = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/dashboard" replace />} />
    <Route path="/dashboard" element={<DashboardContainer />} />
  </Routes>
);

export default DashboardNavigator;