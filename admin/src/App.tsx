import React from 'react';
import './App.css';
import { Header } from './features/pages/header/header';
import { AdminLogin } from './features/auth/login/login';
import { Home, Layout } from './features/pages/homePage/home';
import { Route, Routes } from 'react-router-dom';
import { ForgotPassword } from './features/auth/login/forgotPassword';

function App() {
  return (
    <Routes>
      <Route path= "/" element = {<Layout />} />
      <Route path= "/reset" element = {<ForgotPassword/>} />
    </Routes>
  );
}

export default App;
