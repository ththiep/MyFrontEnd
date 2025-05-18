// src/store/dashboardContext.js
import React, { createContext, useState } from 'react';

export const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
  const [campaignData, setDashboardData] = useState(null);

  return (
    <CampaignContext.Provider value={{ campaignData, setDashboardData }}>
      {children}
    </CampaignContext.Provider>
  );
};
