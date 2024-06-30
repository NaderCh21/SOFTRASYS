// src/pages/Login.js
import React, { useState } from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const Login = () => {
 
  return (
    <div>
    <div className='header'><Header /></div>
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <LoginForm />
    </div>
    </div>
  );
};

export default Login;
