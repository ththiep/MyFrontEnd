import api from './apiService';

const campaignService = {
  getAllCampaigns: async () => {
    try {
      const res = await api.get('api/campaigns');
      return res.data;
    } catch (err) {
      console.error('Error fetching campaigns:', err);
      return { status: 'failure', message: 'Error fetching campaigns' };
    }
  },

  addCampaigns: async (campaigns) => {
    console.log(`Campaign add: ${campaigns}`);
    try {
      const res = await api.post('api/campaigns/add', campaigns);
      return res.data;
    } catch (err) {
      console.error('Error fetching campaigns:', err);
      return { status: 'failure', message: 'Error fetching campaigns' };
    }
  }

};

export default campaignService;
