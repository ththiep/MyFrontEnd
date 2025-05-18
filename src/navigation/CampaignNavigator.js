import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CampaignView from '../features/campaign/campaignView';
import UserView from '../features/user/userView';

const CampaignNavigator = () => (
  <Routes>
    <Route path="/" element={<CampaignView />} />
    <Route path="/user" element={<UserView />} />
  </Routes>
);

export default CampaignNavigator;