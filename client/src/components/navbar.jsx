import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from "react-bootstrap";
import { useAuth } from "../auth/AuthContext";
import logo from "../images/logo-rick.png";
import perfil from "../images/perfil.png";
import search from "../images/search.png";
import "../styles/NavBar.css";

function NavBar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Navbar  expand="lg" className="navbar-custom">
  <div className="navbar-container">
    {/* Logo */}
    <Navbar.Brand as={Link} to="/">
      <img src={logo} alt="Página principal" className="Perfil_icon "/>
    </Navbar.Brand>

    {/* Botón de colapso */}
    <Navbar.Toggle aria-controls="navbarNav" />

    {/* Contenido colapsable */}
    <Navbar.Collapse id="navbarNav" className="navbar-links">
      {/* Menú principal */}
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/coursesView" className="nav-link">
          Categorías
        </Nav.Link>
      </Nav>

      {/* Menú derecho */}
      <Nav>
        <Nav.Link as={Link} to="/Wish_list" className="nav-link">
          Wish List
        </Nav.Link>
        {isAuthenticated ? (
          <>
            <Nav.Link as={Link} to="/Profile">
              <img
                src={perfil}
                className="Perfil_icon"
                alt="Icono de perfil"
                width="30"
              />
            </Nav.Link>
            <Nav.Link onClick={logout} href="#" className="nav-link">
              Cerrar sesión
            </Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link as={Link} to="/Login">
              <Button className="btn-login">Log In</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/Register">
              <Button className="btn-register">Register</Button>
            </Nav.Link>
          </>
        )}
      </Nav>
    </Navbar.Collapse>
  </div>
</Navbar>
  );
}

export default NavBar;