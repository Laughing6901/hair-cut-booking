import React from 'react';
import './App.css';
import { Header } from './features/pages/header/header';
import { AdminLogin } from './features/auth/login/login';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <AdminLogin />
    </div>
  );
}

export default App;
