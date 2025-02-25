import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Homecategory from './Pages/Homecategory';
import Loginsignup from './Pages/Loginsignup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/About Nepal" element={<Homecategory category="About Nepal"/>}/>
          <Route path="/Government" element={<Homecategory category="Goverment"/>}/>
          <Route path="/Services" element={<Homecategory category="Services"/>}/>
          <Route path="/Contact" element={<Homecategory category="Contact"/>}/>
          <Route path="/Login" element={<Loginsignup/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
