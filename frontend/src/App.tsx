import React from 'react';
import './App.css';
import { AboutUs } from './features/user/about/aboutUsPage';
import { HomePage } from './features/user/home/homePage';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <AboutUs />
    </div>
  );
}

export default App;
