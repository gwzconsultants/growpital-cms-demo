import './App.scss';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import Abouts from './pages/Abouts';
import Blog from './pages/Blog';
import BlogDetailsone from './components/blogdetails/blogDetailsone';
import BlogDetailsTwo from './components/blogdetails/blogDetailsTwo';
import BlogDetailsThree from './components/blogdetails/blogDetailsThree';
import BlogDetailsFour from './components/blogdetails/blogDetailsFour';
import BlogDetailsFive from './components/blogdetails/blogDetailsFive';
import BlogDetailsSix from './components/blogdetails/blogDetailsSix';
import BlogDetailsSeven from './components/blogdetails/blogDetailsSeven';
import BlogDetailsEight from './components/blogdetails/blogDetailsEight';
import BlogDetailsNine from './components/blogdetails/blogDetailsNine';
import BlogDetailsTen from './components/blogdetails/blogDetailsTen';
import BlogDetailsEleven from './components/blogdetails/blogDetailsEleven';
import BlogDetailsTwelve from './components/blogdetails/blogDetailsTwelve';
import ScrollToTop from './hooks/AfterNav';
import BlogDetails13 from './components/blogdetails/blogDetails13';
import { useEffect } from 'react';
import AOS from "aos"
import "swiper/css/bundle"
import BlogDetails14 from './components/blogdetails/blogDetails14';


function App() {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect (() =>{
    AOS.init(
      {
        once: true,
        offset: 150,
        easing: 'ease-in-sine',
         delay:50, 
        duration:"300"
      }
    );
  })
  return (
    <>
    <BrowserRouter >
    <ScrollToTop />
    <Routes>
    <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/faqs' element={<Faqs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<Abouts />} />
      <Route path='/privacy-policy' element={<Privacy />} />
      <Route path='/terms' element={<Terms />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/myths-about-indian-agriculture' element={<BlogDetailsone />} />
      <Route path='/blog/farm-sizes-by-country' element={<BlogDetailsTwo />} />
      <Route path='/blog/markets-are-now-pricing-in-100-risk-of-a-u-s-recession-before-year-s-end-deutsche-bank' element={<BlogDetailsThree />} />
      <Route path='/blog/What-are-Hydroponics-and-Aquaponics-farming-techniques?' element={<BlogDetailsFour />} />
      <Route path='/blog/Why-is-the-Indian-stock-market-falling?' element={<BlogDetailsFive />} />
      <Route path='/blog/What-are-different-types-of-Farming?' element={<BlogDetailsSix />} />
      <Route path='/blog/Exports-Future-of-Indias-agriculture' element={<BlogDetailsSeven />} />
      <Route path='/blog/Beyond-Traditional-Investment' element={<BlogDetailsEight />} />
      <Route path='/blog/Alternative-investments-Pros-&-Cons' element={<BlogDetailsNine />} />
      <Route path='/blog/Exploring-new-and-safe-investment-options' element={<BlogDetailsTen />} />
      <Route path='/blog/Behavioral-finance-Do-emotions-overpower-obvious-characteristics' element={<BlogDetailsEleven />} />
      <Route path='/blog/Alternative-investments' element={<BlogDetailsTwelve />} />
      <Route path='/blog/India-is-importer-or-exporter-of-Farm-produce' element={<BlogDetails13 />} />
      <Route path='/blog/Lack-of-Financing-in-Farmland' element={<BlogDetails14 />} />
     


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
