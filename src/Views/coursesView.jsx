import React from "react";
import { Link } from "react-router-dom";  
import "../styles/Courses_view.css";
import "../styles/Command_container.css";

function Courses(){
return(
    <>
<div className="comand-container">
        Command displayer
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
      </svg>
    </div>
      <div className="main">
        <div className="filter_container">
            Here goes the filters for the courses
        </div>
        <div className="Courses_container">
            <div className="Courses_row">
                <a href="#" className="link-course">
                <div className="card" >
                    <img src="../../Images/logo-rick.png" className="card-img-top" width="100px"/>
                    <div className="card-body">
                      <h5 className="card-title">Course 1</h5>
                      <p className="card-text">(We aim to redirect the user to the respective course when available)</p>
                      
                    </div>
                  </div>
                </a>
                  <a href="#"  className="link-course">
                  <div className="card" >
                    <img src="../../Images/logo-rick.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Course 2</h5>
                      <p className="card-text">(We aim to redirect the user to the respective course when available)</p>
                     
                    </div>
                  </div>
                </a>
                  <a href="#"  className="link-course">
                  <div className="card" >
                    <img src="../../Images/logo-rick.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Course 3</h5>
                      <p className="card-text">(We aim to redirect the user to the respective course when available)</p>
                  
                    </div>
                  </div>
                </a>
            </div>
            <div className="Courses_row">
                <a href="#" className="link-course">
                <div className="card" >
                    <img src="../../Images/logo-rick.png" className="card-img-top" width="100px"/>
                    <div className="card-body">
                      <h5 className="card-title">Course 4</h5>
                      <p className="card-text">(We aim to redirect the user to the respective course when available)</p>
                      
                    </div>
                  </div>
                </a>
                  <a href="#"  className="link-course">
                  <div className="card" >
                    <img src="../../Images/logo-rick.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Course 5</h5>
                      <p className="card-text">(We aim to redirect the user to the respective course when available)</p>
                     
                    </div>
                  </div>
                </a>
                  <a href="#"  className="link-course">
                  <div className="card" >
                    <img src="../../Images/logo-rick.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Course 6</h5>
                      <p className="card-text">(We aim to redirect the user to the respective course when available)</p>
                  
                    </div>
                  </div>
                </a>
            </div>
            
        </div>
        
      </div>
      </>
);

}
export default Courses;