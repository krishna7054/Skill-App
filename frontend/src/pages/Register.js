// src/pages/Register.js

import React from 'react';
import AuthForm from '../components/AuthForm';

const Register = () => {
  return (
    <div className="container mx-auto mt-8">
      <AuthForm isLogin={false} />
    </div>
  );
};

export default Register;
