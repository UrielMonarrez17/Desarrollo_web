import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "../styles/Courses_view.css";
import "../styles/Command_container.css";
import { Card,Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import back from"../constants";
import estrella from "../images/estrella.png";
import axios from "axios";


function Courses() {
  const [courses,setCourses]=useState([]);
  const [filters,setFilters]=useState([]);
  const [collapseOpen,setCollapseOpen]=useState(false);
  const [usersExcel, setUsersExcel] = useState([]);

  useEffect(() => {
    getAllCourses();
    getFilters();
  },[]);

  const getAllCourses=async()=>{
    const cursos=await fetch(`${back.connection}/database/courses`);
    const cur=await cursos.json();
    setCourses(cur);
  }

  const getFilters=async()=>{
    const filtros=await fetch(`${back.connection}/database/filters`);
    const fil=await filtros.json();
    setFilters(fil);
    //console.log("fil:",fil);
  }

  const handleCheckboxChange = (index) => {
    const auxarray=[];
    filters[index].checked = !filters[index].checked;
    setFilters(filters);
    setUsersExcel(auxarray);
  };

  const agregarFavoritos = async (nombre) => {
    const user=localStorage.getItem('user');
    //console.log("us:",user);
    const message= await axios.post(`${back.connection}/database/user/favorites`,
      {nombre:nombre,user:user});
      alert(message.data.message);
    
  };

  const eventFiltrar = async() => {
    getAllCourses();
    const filtros=await fetch(`${back.connection}/database/filters/exec`,
      {
        method: 'POST', // Indicar que es un POST
        headers: {
            'Content-Type': 'application/json', // Tipo de contenido
        },
        body: JSON.stringify({filters}) // Convertir el objeto a una cadena JSON
    }
    );
    //console.log("lita:",filtros);
    const fil=await filtros.json();

    //console.log("filita:",fil);
    setCourses(fil[0]);
    
  };

  return (
    <>
      
      <div className="main-courses-container">
        <div className="filter_container">
        <div className="comand-container">
        Command displayer
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
        </svg>
      </div>
      <div className="filters">
        <h4 onClick={()=>{setCollapseOpen(!collapseOpen)}} className="Filtros_button">Filtros</h4>
        <Collapse in={collapseOpen}  className="collapse">

        <div id="example-collapse-text" style={{ borderRight: '2px solid #3a7c9d', padding: '10px' }}>
          {filters.length>0? filters.map((item,index)=>{
            return(
              <div className="filters_item">
            <input   type="checkbox"
            checked={item.checked}
            onClick={()=>{handleCheckboxChange(index)}}></input>
          <div onClick={()=>{handleCheckboxChange(index)}} className="filterText">
            {item.type}
          </div>
          </div>
            );
          }):null}
          <button className="filters_button" onClick={eventFiltrar}>Filtrar</button>
        </div>
        
      </Collapse>
        </div>
        </div>
        <div className="CoursesContainer">
        {courses.length>0? courses.map((item,index)=>{
          return(
            
        <Card className="Card">
          <img src={estrella} alt={"Añadir curso de "+item.name+" a favoritos"} className="favoriteIcon" onClick={()=>{agregarFavoritos(item.name)}}></img>
          <Link className="nav-link" to="/CoursesInside">
      <Card.Img variant="top" src={item.image} style={{ width: '8rem',height: '8rem', margin: '1rem' }}/>
      <Card.Body>
        <Card.Title className="cardTitle">{item.name}</Card.Title>
        <Card.Text className="cardText">{item.autor}</Card.Text>
            
      </Card.Body>
      </Link>
    </Card>
    
          );
      }):null}
      </div>
      </div>
      
      

    </>
  );
}
export default Courses;

