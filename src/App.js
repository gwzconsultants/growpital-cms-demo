import './App.scss';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import Abouts from './pages/Abouts';
import ScrollToTop from './hooks/AfterNav';
import { useEffect } from 'react';
import AOS from "aos"
import "swiper/css/bundle"
import  { ScrollHandler } from './hooks/ScrollHandlerID';
import Blog from './pages/Blog';
import BlogDetails from './components/Blog_Component/BlogDetails';

// import BlogDetailsone from './components/blogdetails/blogDetailsone';
// import BlogDetailsTwo from './components/blogdetails/blogDetailsTwo';
// import BlogDetailsThree from './components/blogdetails/blogDetailsThree';
// import BlogDetailsFour from './components/blogdetails/blogDetailsFour';
// import BlogDetailsFive from './components/blogdetails/blogDetailsFive';
// import BlogDetailsSix from './components/blogdetails/blogDetailsSix';
// import BlogDetailsSeven from './components/blogdetails/blogDetailsSeven';
// import BlogDetailsEight from './components/blogdetails/blogDetailsEight';
// import BlogDetailsNine from './components/blogdetails/blogDetailsNine';
// import BlogDetailsTen from './components/blogdetails/blogDetailsTen';
// import BlogDetailsEleven from './components/blogdetails/blogDetailsEleven';
// import BlogDetailsTwelve from './components/blogdetails/blogDetailsTwelve';
// import BlogDetails13 from './components/blogdetails/blogDetails13';
// import BlogDetails14 from './components/blogdetails/blogDetails14';
// import BlogDetailsTwo from './components/blogPages/blogdetails/blogDetailsTwo';
// import BlogCategery from './components/BlogCategery';


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
  <ScrollHandler />
    <Routes>
    <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/faqs' element={<Faqs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<Abouts />} />
      <Route path='/privacy-policy' element={<Privacy />} />
      <Route path='/terms' element={<Terms />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/:slug' element={<BlogDetails />} />
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
