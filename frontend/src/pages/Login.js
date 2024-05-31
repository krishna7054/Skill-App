// src/pages/Login.js

import React from 'react';
import AuthForm from '../components/AuthForm';

const Login = () => {
  return (
    <div className="container mx-auto mt-8">
      <AuthForm isLogin={true} />
    </div>
  );
};

export default Login;
