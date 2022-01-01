import React from 'react';
import './App.css';
import { Header } from './features/pages/header/header';
import { AdminLogin } from './features/auth/login/login';
import { Home } from './features/pages/homePage/home';

function App() {
  return (
    <div>
      {/* <Header/> */}
      <Home />
      {/* <AdminLogin /> */}
    </div>
  );
}

export default App;
