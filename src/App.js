import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Courses from"./Views/coursesView";
import Home from"./Views/Home";
import WishList from "./Views/WishList"; // Importar el componente de la wish list
import Footer from"./components/Footer";
import Navbar from "./components/navbar";


function App() {
  return (
    
    <Router>
      <Navbar tabIndex="1"/> 
      <Routes tabIndex="2">
        <Route path="/" element={<Home />} />           
        <Route path="/coursesView" element={<Courses />} /> 
        <Route path="/wishlist" element={<WishList />} />   
      </Routes>
      <Footer/>
    </Router>
    

   
     
  );
}

export default App;
