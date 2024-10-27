import React from "react";
import "../styles/Footer.css";
import logo from  "../images/logo-rick.png";

function Footer(){
    return (
        <div class="footer">
        <div class="footer-container">
          <img class="logo" src={logo} />
          <div class="social">
            <i class="fab fa-facebook-f"> </i>
            <i class="fab fa-instagram"> </i>
            <i class="fab fa-google"> </i>
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