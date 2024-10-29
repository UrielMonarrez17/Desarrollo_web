import React from "react";
import { Link } from 'react-router-dom';

import "../styles/NavBar.css";
import logo from  '../images/logo-rick.png';
import search from  '../images/search.png';
function navbar(){
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="40" height="30" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/coursesView">Categorías</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Learning</a>
            </li>
          </ul>
          <form className="d-flex me-3">
            <input
              className="form-control search-bar me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              <img className="bi bi-search" src={search}></img>
            </button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Wish List</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Donations</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-login me-2" href="#">Log In</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-register" href="#">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      {/*
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
    </nav>*/}
    </>
    );
}

export default navbar;