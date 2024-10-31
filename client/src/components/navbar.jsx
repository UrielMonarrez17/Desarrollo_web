import React from "react";
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import "../styles/NavBar.css";
import logo from  '../images/logo-rick.png';
import perfil from  '../images/perfil.png';
import search from  '../images/search.png';
function navbar(){
  const { isAuthenticated, logout } = useAuth();
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Pagina principal" width="40" height="30" />
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
            {/*<li className="nav-item">
              <a className="nav-link" href="#">Learning</a>
            </li>*/}
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
              <Link className="nav-link" to="Wish_list">Wish List</Link>
            </li>
            {/*<li className="nav-item">
              <a className="nav-link" href="#">Donations</a>
            </li>*/}
            {isAuthenticated ? (
                    <>
                        <li><a href="#"><img src={perfil} className="Perfil_icon" alt="Icono de perfil"/></a></li>
                        <li><a onClick={logout} href="">Cerrar sesion</a></li>
                    </>
                ) : (
                  <>
            <li className="nav-item">
              <Link className="btn btn-login me-2" to="/Login">Log In</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-register" to="/Register">Register</Link>
            </li>
            </>
                )}
          </ul>
        </div>
      </div>
    </nav>
 
    </>
    );
}

export default navbar;