import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CampaignView from '../features/campaign/campaignView';

const DashboardNavigator = () => (
  <Routes>
    <Route path="/home" element={<CampaignView />} />
  </Routes>
);

export default DashboardNavigator;