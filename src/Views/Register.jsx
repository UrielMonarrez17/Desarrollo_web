import React,{useState,useEffect} from  'react';
import mascota from"../images/Mascota.png";
import "../styles/Register.css";
import back from"../constants";
import axios from 'axios';
function Register(){
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Seleccionamos los elementos del formulario
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const contraseñaInput = document.getElementById('contraseña');
const terminosCheck = document.getElementById('terminos');
const registrarBtn = document.getElementById('registrar-btn');

// Función para verificar si los campos están completos
function verificarCampos() {
    if (nombreInput.value && correoInput.value && contraseñaInput.value && terminosCheck.checked) {
        registrarBtn.classList.add('active');
        registrarBtn.disabled = false;
    } else {
        registrarBtn.classList.remove('active');
        registrarBtn.disabled = true;
    }
}


    const handleRegister = async (e) => {

        e.preventDefault();
        try {
            const response =await axios.post(`${back.connection}/database/user/register`, {userName, email, password });
            const token = response.data;
            localStorage.setItem('token', token);
            
            console.log("tok:",token)
            alert("Usuario registrado exitosamente");
            localStorage.setItem('user', userName);
            window.location.href="/";
           
            
        } catch (error) {
            alert("Error al registrar el usuario");
        }
    };

  return(
    <div className="wrapper">
                                 
            <div className="container">
              <div className="left-section">
                  <h2>Regístrate y logra lo que sea</h2>
                  
                  <form id="register-form" onSubmit={(e)=>{handleRegister(e)}}>
                      <input type="text" id="nombre" placeholder="Nombre" onChange={(e) => {setUserName(e.target.value);verificarCampos;}} required />
                      <input type="email" id="correo" placeholder="Correo" onChange={(e) => {setEmail(e.target.value);verificarCampos;}} required />
                      <input type="password" id="contraseña" placeholder="Contraseña" onChange={(e) => {setPassword(e.target.value);verificarCampos;}} required/>
                      
                      <button type="submit" id="registrar-btn" disabled>Registrarte</button>
      
                      <div className="terms">
                          <input type="checkbox" id="terminos" onChange={verificarCampos} required/>
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