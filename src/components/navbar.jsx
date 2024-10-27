import React from "react";
import { Link } from 'react-router-dom';

import "../styles/NavBar.css";
import logo from  '../images/logo-rick.png';
import search from  '../images/search.png';
function navbar(){
    return (
        
      <nav className="nav">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <Link to="/coursesView"> Categorías </Link>
      <Link to="/My_learning"> Learning </Link>
      <div className="search-div">
        <input type="search" placeholder="Search" />
        <img className="search-icon" src={search} alt="Search Icon" />
      </div>
      <Link to="/Wish_list"> Wish List </Link>
      <Link to="#"> Donations </Link>
      <Link to="#" tabIndex="-1">
        <button className="login-btn"> Log In</button>
      </Link>
      <Link to="#" tabIndex="-1">
        <button className="register-btn"> Register</button>
      </Link>
    </nav>
    );
}

export default navbar;