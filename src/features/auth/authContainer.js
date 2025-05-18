// src/features/auth/authContainer.js
import React from 'react';
import AuthView from './authView/authView';
import { useAuthViewModel } from './authViewModel';

const AuthContainer = ({ mode = 'login' }) => {
  const { formData, errors, onChange, onLogin } = useAuthViewModel(mode);

  return (
    <AuthView
      mode={mode}
      formData={formData}
      errors={errors}
      onChange={onChange}
      onLogin={onLogin}
    />
  );
};

export default AuthContainer;