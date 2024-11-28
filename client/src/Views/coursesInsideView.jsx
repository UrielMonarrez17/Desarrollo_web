import React, { useEffect, useState } from "react";
import "../styles/CoursesInside.css"; // Asegúrate de que la ruta sea correcta
import CollapseItem from "../components/CollapseLesson.jsx"; // Importa el componente CollapseItem
import { useParams } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import axios from "axios";
import back from"../constants";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const CoursesInsideView = () => {
  const { isAuthenticated, logout } = useAuth();
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [courses, setCourses] = useState([]);
  const [cursoActual, setCursoActual] = useState(null);
  const {course_id}=useParams();
  const [message, setMessage] = useState(null);
  const [showAlert, setShowAlert] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
  const timer = setTimeout(() => {
    setTimeout(() => setShowAlert(false), 500); // Ocultar después de la animación
  }, 1500);

  return () => clearTimeout(timer);
}, [message]);

  useEffect(()=>{
    getCourse()
    getInsideCourses();
  },[]);

  const getInsideCourses=async()=>{
    const cursos=await axios.post(`${back.connection}/database/courses/inside`,
      {id:course_id}
    );
    
    setCourses(cursos.data.contenido);
  }

  const getCourse=async()=>{
    const cursos=await axios.post(`${back.connection}/database/courses/learning`,
      {id:course_id,
        usuario:localStorage.getItem("user")
      }
    );
    console.log("cur:",typeof cursos.data);
    if(typeof cursos.data!="object"){
      //console.log("entro al 1:" , cursos.data);
navigate(cursos.data);
    }else{
      //console.log("entro al 2:",cursos);
      setCursoActual(cursos.data);
    }
    
  }

  const addLearningCourse=async(curso_id)=>{
    await setShowAlert(true);
    

    if(isAuthenticated){
      
        const cursos=await axios.post(`${back.connection}/database/user/buy`,
      {course_id:curso_id,
        user:localStorage.getItem("user")
      }
    );
    //console.log("adentro:",cursos.data.message);
    setMessage({ type: "info", text: cursos.data.message});
  }else{
    setMessage({ type: "info", text:"Porfavor primero inicia sesion "});
  }
    

  }

  const handleAddToFavorites = () => {
    setMessage({ type: "success", text: "¡Curso agregado a favoritos!" });
  };

  const handlePurchaseCourse = () => {
    setMessage({ type: "info", text: "¡Gracias por adquirir el curso!" });
  };

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
  };
  
  return (
    <div class="coursesInsideView-container">
      {showAlert && (
      message && (
        <div className={`alert alert-${message.type}`} role="alert">
          {message.text}
        </div>
        ))}
      
      <div class="flex flex-wrap justify-center mb-4">
        <div class="w-full md:w-1/2 xl:w-1/3 p-4">
          <div class="coursesInsideView-card">
            <div class="coursesInsideView-icon">
              <img
                alt="Icon representing chemistry fundamentals course"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/XVtNZ4PLAfUVFqCEKFJrnVyk40EiYsyWafzt0GJNn65oy6yTA.jpg"
                width="100"
              />
            </div>
            <h2 class="coursesInsideView-title">{cursoActual!=null?cursoActual.name:"Error fatal"}</h2>
            <p class="coursesInsideView-description">
              {cursoActual!=null?cursoActual.description:"Error fatal"}
            </p>
            <div class="coursesInsideView-price">
            <button
          onClick={handleAddToFavorites}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#ffcc00",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          aria-label="Agregar a favoritos"
        >
          🌟 Agregar a Favoritos
        </button>

        <button
          onClick={()=>{
            console.log("curso:",cursoActual);
            addLearningCourse(cursoActual.id_course)}}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          aria-label="Adquirir el curso"
        >
          🛒 Adquirir Curso
        </button>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 xl:w-2/3 p-4">
          <div class="coursesInsideView-video-container">
            <iframe
              allow="autoplay"
              allowfullscreen=""
              height="315"
              src={cursoActual!=null?cursoActual.video_url:"https://www.youtube.com/embed/dQw4w9WgXcQ"}
              title="Video explicativo del curso"
              width="100%"
            ></iframe>
          </div>
          <h2 class="coursesInsideView-title">Course Overview</h2>
          <p class="coursesInsideView-description">
            This course will cover the basics of chemistry, including atomic
            structure, chemical bonding, and chemical reactions.
          </p>
          <div class="coursesInsideView-description">
            <div>
              Learn about the structure of atoms, including protons, neutrons,
              and electrons
            </div>
            <div>Understand how atoms bond together to form molecules</div>
            <div>
              Learn about the different types of chemical reactions, including
              synthesis, decomposition, and replacement reactions
            </div>
            <div>
              Understand the properties and behaviors of acids and bases
            </div>
            <div>
              Learn about the relationships between heat, energy, and work
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center mb-4">
        <h2 class="coursesInsideView-title">Lessons</h2>
      </div>
      <div class="coursesInsideView-lesson-container">
       {courses.map((item,index)=>{
          return(
          <CollapseItem title={item.nombre} description={item.description} subtopics={item.aprendizajes}></CollapseItem>
          );
        })
       }
        

        
      </div>
      
    </div>
  );
};

export default CoursesInsideView;
