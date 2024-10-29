import React,{useState,useEffect} from  'react';
import mascota from"../images/Mascota.png";
import "../styles/Register.css";
function Register(){
  return(
    <div className="wrapper">
                                 
            <div className="container">
              <div className="left-section">
                  <h2>Regístrate y logra lo que sea</h2>
                  
                  <form id="register-form">
                      <input type="text" id="nombre" placeholder="Nombre" required/>
                      <input type="email" id="correo" placeholder="Correo" required/>
                      <input type="password" id="contraseña" placeholder="Contraseña" required/>
                      
                      <button type="button" id="registrar-btn" disabled>Registrarte</button>
      
                      <div className="terms">
                          <input type="checkbox" id="terminos" required/>
                          <label for="terminos">Aceptar términos y condiciones</label>
                      </div>
                  </form>
                  
                  <div className="login-section">
                      <p>¿Ya tienes una cuenta?</p>
                      <button type="button" id="iniciar-btn">Iniciar sesión</button>
                  </div>
              </div>
      
              <div className="right-section">
                  <img className="mascota-recuadro" src={mascota}>
                    </img>
              </div>
          </div>

    </div>
    );
  }

  export default Register;