import { useState, useContext } from 'react';
import { AuthContext } from '../../store/authContext';
import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export const useAuthViewModel = (mode = 'login') => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username can be blank';
    if (!formData.password) newErrors.password = 'Password can be blank';
    if (!formData.confirmPassword && mode === 'register') newErrors.confirmPassword = 'Confirm password can be blank';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
        let response;
        if (mode === 'login') {
            console.log('Login', formData);
            response = await authService.login(formData.username, formData.password);
            console.log('Login success', response);
        } else {
        // Gọi API register
            console.log('Register', formData);
            response = await authService.register(formData);
            console.log('Register success', response);
        }
        if (response.status === 'success') {
          localStorage.setItem('token', response.data.token);
          setIsAuthenticated(true);
          navigate('/dashboard');
        } else {
          // Nếu thất bại, hiển thị lỗi từ response
          setErrors({ general: response.message || 'Authentication failed' });
        }
    } catch (err) {
      console.error('Auth error:', err);
      setErrors({ general: 'Server error, please try again later.' });
    } finally {
        
    }
  };

  return {
    formData,
    errors,
    onChange,
    onLogin,
  };
};