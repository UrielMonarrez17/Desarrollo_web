import React, { useRef, useState } from 'react';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/InternalCourses.css";



const respuestasCorrectas1 = {
    preg1: "2,5,10",
    preg2: "3",
    preg3: "2,3"
};

const respuestasCorrectas2 = {
    preg4: "16x^2y^2z^3",
    preg5: "7xy-4x+2xy",
    preg6: "2y"
};

const respuestasCorrectas3 = {
    preg7: "4",
    preg8: "25xy",
    preg9: "y/4"
};

const respuestasCorrectas4 = {
    preg10: "x+6+(10/x-2)",
    preg11: "2x+5+(26/x-5)"
};

const respuestasCorrectas5 = {
    preg12: "5(y-12x+3)",
    preg13: "z(xy+x-y)"
};

// Componente principal
const InternalCourses = () => {
    const [mensajes, setMensajes] = useState({});
    const inputRefs = useRef({});

    // Función para comprobar las respuestas
    const comprobarRespuestas = (conjuntoRespuestas, resultadoId) => {
        const nuevoMensaje = { ...mensajes };

        nuevoMensaje[resultadoId] = Object.keys(conjuntoRespuestas).map((preguntaId) => {
            const respuestaUsuario = inputRefs.current[preguntaId]?.value.trim();
            const esCorrecta = respuestaUsuario === conjuntoRespuestas[preguntaId];
            const color = esCorrecta ? 'green' : 'red';
            
            // Cambiar estilo de borde
            inputRefs.current[preguntaId].style.borderColor = color;
            
            return (
                <p key={preguntaId}>
                    Pregunta {preguntaId.slice(-1)} es {esCorrecta ? "correcta" : `incorrecta. La respuesta correcta es ${conjuntoRespuestas[preguntaId]}`}.
                </p>
            );
        });

        setMensajes(nuevoMensaje);
    };

   
    
        return (
          <div>
            {/* Barra lateral */}
            <nav className="sidebar">
              <a href="#tema1">Tema 1: Divisibilidad</a>
              <a href="#tema2">Tema 2: Sumas y Restas</a>
              <a href="#tema3">Tema 3: Multiplicación</a>
              <a href="#tema4">Tema 4: División</a>
              <a href="#tema5">Tema 5: Factorización</a>
            </nav>
      
            {/* Barra de navegación */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img src="/Images/logo_prueba.webp" alt="Bootstrap" width="30" height="24" />
                </a>
                <a className="navbar-brand" href="#">DinoVision</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/main/index.html">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                  <div className="text-end">
                    <button type="button" className="btn btn-outline-light me-2">Login</button>
                    <button type="button" className="btn btn-warning">Sign-up</button>
                  </div>
                </div>
              </div>
            </nav>
      
            {/* Contenido principal */}
            <div className="main-content">
              <h1>Álgebra</h1>
              <h4 id="tema1">Tema 1: Divisibilidad</h4>
              <p>Cómo saber si un número es divisor de otro. Tomaremos como ejemplo el número 5060.</p>
              <ul>
                <li><b>Cero:</b> Ningún número es divisible entre cero.</li>
                <li><b>Uno:</b> Todos los números son divisibles entre uno.</li>
                <li><b>Dos:</b> Todo número par.</li>
                <li><b>Tres:</b> Que la suma de sus dígitos sea divisible entre 3.</li>
                {/* Agregar el resto de las reglas aquí */}
              </ul>
              <h6>Ejercicios:</h6>
              <p>Escribe en los recuadros los números del 2 al 10 que son divisores del número dado, separados por comas.</p>
              <ul>
                <li>3000 - <input id="preg1" type="text" /></li>
                <li>471 - <input id="preg2" type="text" /></li>
                <li>234 - <input id="preg3" type="text" /></li>
              </ul>
              <button id="comprobarBtn1">Comprobar respuestas</button>
              <div id="resultado1"></div>
      
              {/* Resto de los temas */}
              <hr />
              <h4 id="tema2">Tema 2: Sumas y Restas de polinomios</h4>
              {/* Continuar con la estructura similar para los demás temas */}
            </div>
          </div>
        );
};


export default InternalCourses;
