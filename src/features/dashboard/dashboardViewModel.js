import { useState, useEffect, useCallback } from 'react';
import authService from '../../services/authService';

export const useDashboardViewModel = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [campaigns, setCampaigns] = useState([]);

  const fetchDashboardData = useCallback(async () => {
    try {
      const response = await authService.getUserInfo();
      if (response.status === 'success') {
        setUserInfo(response.data);
        setCampaigns(response.data.campaigns || []);
      } else {
        setError(response.message || 'Failed to fetch dashboard data');
      }
    } catch (err) {
      console.error('Dashboard fetch error:', err);
      setError('Server error, please try again later.');
    }
  }, []);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return {
    userInfo,
    campaigns,
    error,
    fetchDashboardData,
  };
};