import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { AboutUs } from './features/page/about/aboutUsPage';
import { BarberPage } from './features/page/barber/barberPage';
import { getBarber } from './features/page/barber/barberSlice';
import { BlogPage } from './features/page/blog/blogPage';
import { getBlog } from './features/page/blog/blogSlice';
import { getComment } from './features/page/blog/comment/commentSlice';
import { SingleBlog } from './features/page/blog/singleBlog';
import { ContactPage } from './features/page/contact/contactPage';
import { Footer } from './features/page/footer/footer';
import { PortfolioPage } from './features/page/gallery/portfolioPage';
import { getPortfolio } from './features/page/gallery/portfolioSlice';
import { Header } from './features/page/header/header';
import { HomePage } from './features/page/home/homePage';
import { PreviewPage } from './features/page/preview/previewPage';
import { PricePage } from './features/page/price/pricePage';
import { getAllService } from './features/page/price/serviceOnlySlice';
import { getCategories } from './features/page/service/category';
import { Service } from './features/page/service/servicePage';
import { getAllUser } from './features/user/userInfo';

const App:React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAllService());
    dispatch(getBarber());
    dispatch(getPortfolio());
    dispatch(getBlog(0));
    dispatch(getAllUser());
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
        <Route path= "/blog" element = {<BlogPage />} />
        <Route path= "/single" element = {<SingleBlog/>} />
        <Route path= "/history" element = {<PreviewPage/>} />
        <Route path = "/contact" element = {<ContactPage />} />
        <Route path = "/gallery" element = {<PortfolioPage />} />
      </Routes>
      <Footer />
      <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
    </div>
  );
}

export default App;
