import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutUs } from './features/page/about/aboutUsPage';
import { Service } from './features/page/service/servicePage';
import { Header } from './features/page/header/header';
import { HomePage } from './features/page/home/homePage';
import { PricePage } from './features/page/price/pricePage';
import { BarberPage } from './features/page/barber/barberPage';
import { BlogPage } from './features/page/blog/blogPage';
import { ContactPage } from './features/page/contact/contactPage';
import { Footer } from './features/page/footer/footer';
import { PortfolioPage } from './features/page/gallery/portfolioPage';

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
        <Route path = "/gallery" element = {<PortfolioPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
