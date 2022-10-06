import './App.scss';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';


function App() {
  return (
    <>
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/faqs' element={<Faqs />} />
      <Route path='/contact' element={<Contact />} />
      

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
