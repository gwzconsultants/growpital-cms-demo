import './App.scss';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import Abouts from './pages/Abouts';


function App() {
  return (
    <>
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/faqs' element={<Faqs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/abouts' element={<Abouts />} />
      <Route path='/privacy-policy' element={<Privacy />} />
      <Route path='/terms' element={<Terms />} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
