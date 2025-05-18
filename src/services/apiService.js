import axios from 'axios';
import loadingManager from './LoadingManager';


const apiService = axios.create({
  baseURL: 'https://circular-ether-458901-i2.as.r.appspot.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors nếu cần
apiService.interceptors.request.use((config) => {
    loadingManager.start();
    // Thêm token nếu có
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

apiService.interceptors.response.use(
  response => {
    loadingManager.stop();
    return response;
  },
  error => {
    loadingManager.stop();
    // return Promise.reject(error);
    if (error.response && error.response.data) {
      // Trả về luôn object lỗi theo đúng cấu trúc
      return Promise.resolve(error.response.data);
    }
    return Promise.resolve({
      status: 'failure',
      message: error.message || 'Network or server error',
      data: null,
    });
  }
);

export default apiService;