import api from './apiService'; // apiService là axios instance

const authService = {
  login: async (username, password) => {
    const response = await api.post('api/user/login', { username, password });
    return response.data;
  },

  register: async (formData) => {
    const response = await api.post('api/user/register', formData);
    return response.data;
  },
};

export default authService;