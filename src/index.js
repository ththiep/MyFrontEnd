import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './store/authContext';
import { CampaignProvider } from './store/campaignContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CampaignProvider>
          <App />
        </CampaignProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);