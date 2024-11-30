import React,{useState,useEffect} from  'react';
import mascota from"../images/Mascota.png";
import "../styles/Register.css";
import back from"../constants";
import axios from 'axios';
function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleLogin = async (e) => {

        e.preventDefault();
        try {
            const response =await axios.post(`${back.connection}/database/user/login`, { email, password });
            const token = response.data;
            localStorage.setItem('token', token.token);
            alert("Usuario registrado exitosamente");
            localStorage.setItem('user', token.usuario);
            window.location.href="/";
           
            
        } catch (error) {
            alert("Error al loggear el usuario");
        }
    };

  return(
    <div className="wrapper">
                                 
            <div className="container">
              <div className="left-section">
                  <h2>Regístrate y logra lo que sea</h2>
                  
                  <form id="register-form" onSubmit={(e)=>{handleLogin(e)}}>
                      <input type="email" id="correo" placeholder="Correo" onChange={(e) => {setEmail(e.target.value);}} required />
                      <input type="password" id="contraseña" placeholder="Contraseña" onChange={(e) => {setPassword(e.target.value);}} required/>
      
                      <div className="login-section">
                      <button type="submit" id="iniciar-btn">Iniciar sesión</button>
                  </div>
                  </form>
                  
                  
              </div>
      
              <div className="right-section">
                  <img className="mascota-recuadro" src={mascota}>
                    </img>
              </div>
          </div>

    </div>
    );
  }

  export default Login;