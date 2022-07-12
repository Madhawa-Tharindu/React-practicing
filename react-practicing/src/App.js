import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';


import Namelist from './components/pages/NameList/NameLIst';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Home from './components/pages/Home/Home';
import About from './components/pages/AboutUs/AboutUs';
//import AboutUs from './components/pages/AboutUs/AboutUs';
function App() {
  return (
    <div>
      
      <BrowserRouter>
      
        <HeaderBar />
        <Routes>
        
        <Route path="/about" element={<About />} />
        <Route path="/namelist" element={<Namelist />} />
        <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
