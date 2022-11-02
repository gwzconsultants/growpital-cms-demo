import './App.scss';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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


function App() {
  return (
    <>
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/faqs' element={<Faqs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<Abouts />} />
      <Route path='/privacy-policy' element={<Privacy />} />
      <Route path='/terms' element={<Terms />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/1' element={<BlogDetailsone />} />
      <Route path='/blog/2' element={<BlogDetailsTwo />} />
      <Route path='/blog/3' element={<BlogDetailsThree />} />
      <Route path='/blog/4' element={<BlogDetailsFour />} />
      <Route path='/blog/5' element={<BlogDetailsFive />} />
      <Route path='/blog/6' element={<BlogDetailsSix />} />
      <Route path='/blog/7' element={<BlogDetailsSeven />} />
      <Route path='/blog/8' element={<BlogDetailsEight />} />
      <Route path='/blog/9' element={<BlogDetailsNine />} />
      <Route path='/blog/10' element={<BlogDetailsTen />} />
      <Route path='/blog/11' element={<BlogDetailsEleven />} />
      <Route path='/blog/12' element={<BlogDetailsTwelve />} />


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
