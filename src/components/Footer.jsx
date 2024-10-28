import React from "react";
import "../styles/Footer.css";
import logo from  "../images/logo-rick.png";

function Footer(){
    return (
        <div className="footer">
        <div className="footer-container">
          <img className="logo" src={logo} />
          <div className="social">
            <i className="fab fa-facebook-f"> </i>
            <i className="fab fa-instagram"> </i>
            <i className="fab fa-google"> </i>
          </div>
          <div>
            <p>Contacto: numero</p>
          </div>
          <div>
            <p>¿Quienes somos?</p>
          </div>
        </div>
      </div>
      );
}

export default Footer;