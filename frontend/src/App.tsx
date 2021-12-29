import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutUs } from './features/user/about/aboutUsPage';
import { Service } from './features/user/service/servicePage';
import { Header } from './features/user/header/header';
import { HomePage } from './features/user/home/homePage';
import { PricePage } from './features/user/price/pricePage';
import { BarberPage } from './features/user/barber/barberPage';
import { BlogPage } from './features/user/blog/blogPage';
import { ContactPage } from './features/user/contact/contactPage';
import { Footer } from './features/user/footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path= "/" element = {<HomePage/>} />
        <Route path= "/about" element = {<AboutUs/>} />
        <Route path= "/service" element = {<Service/>} />
        <Route path= "/price" element = {<PricePage/>} />
        <Route path= "/barber" element = {<BarberPage/>} />
        <Route path= "/blog" element = {<BlogPage/>} />
        <Route path = "/contact" element = {<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
