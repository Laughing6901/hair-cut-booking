import React, {useEffect} from 'react';
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
import { useAppDispatch } from './app/hooks';
import { getCategories } from './features/page/service/category';
import { getAllService } from './features/page/price/serviceOnly';

const App:React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAllService());
  }, [])
  return (
    <div>
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
