import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CampaignView from '../features/campaign/campaignView';

const CampaignNavigator = () => (
  <Routes>
    <Route path="/campaign" element={<CampaignView />} />
  </Routes>
);

export default CampaignNavigator;