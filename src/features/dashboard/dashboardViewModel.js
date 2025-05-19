import { useState, useEffect, useCallback } from 'react';
import campaignService from '../../services/campaignService';
import FileHandler from '../../utils/fileHandler';



export const useDashboardViewModel = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState(null);

  const importCSV = async (file) => {
    try {
      const parsedData = await FileHandler.parseCSVFile(file);
      // Lấy danh sách campaign hiện tại
      const existingRes = await campaignService.getAllCampaigns();
      if (existingRes.status !== 'success') {
        setError(existingRes.message || 'Failed to fetch campaigns');
        return;
      }
      const existingCampaigns = existingRes.data || [];
      const newCampaigns = parsedData.filter(newCamp => 
      !existingCampaigns.some(existingCamp => existingCamp.campaign_name === newCamp['campaign_name'])
      );

      if (newCampaigns.length === 0) {
        alert('Không có campaign mới để thêm');
        return;
      }

      // Thêm campaign mới
      const addRes = await campaignService.addCampaigns(newCampaigns);
      if (addRes.status === 'success') {
        // Cập nhật lại danh sách campaign từ server
        const refreshRes = await campaignService.getAllCampaigns();
        if (refreshRes.status === 'success') {
          setCampaigns(refreshRes.data || []);
          alert('Thêm camp thành công');
        } else {
          setError(refreshRes.message || 'Failed to fetch campaigns');
        }
      } else {
        setError(addRes.message || 'Failed to add campaigns');
      }
      // const campRes = await campaignService.addCampaigns(parsedData)
      // if (campRes.status === 'success') {
      //   const campRes = await campaignService.getAllCampaigns();
      //   if (campRes.status === 'success') {
      //     setCampaigns(campRes.data || []);
      //   } else {
      //     setError(campRes.message || 'Failed to fetch campaigns');
      //   }
      // }
    } catch (err) {
      console.error('Lỗi khi import CSV:', err);
      alert('Không thể đọc file CSV. Vui lòng kiểm tra định dạng.');
    }
  };

  const fetchDashboardData = useCallback(async () => {
    try {
      const campRes = await campaignService.getAllCampaigns();
      if (campRes.status === 'success') {
        setCampaigns(campRes.data || []);
      } else {
        setError(campRes.message || 'Failed to fetch campaigns');
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
    campaigns,
    error,
    fetchDashboardData,
    importCSV,
  };
};