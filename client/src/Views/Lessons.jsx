import React, { useState,useEffect } from "react";
import { Card, Button, Container, Row, Col, Accordion } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../styles/Lessons.css";
import axios from "axios";
import back from"../constants";

function ViewLesson() {
  const { course_id } = useParams();
  const [lesson, setLesson] = useState({  });
  const [menu, setMenu] = useState({  });
  const [overview, setOverview] = useState([]);
  useEffect(() => {
    getLesson();
  }, []);

  const getLesson=async()=>{
    const response = await axios.post(`${back.connection}/database/lessons`,
        {
            id:course_id
        }
    );
    console.log("restrao:",response);
    setLesson(response.data);
    setOverview(response.data.overview);
    getMenu(response.data.curso_padre);
  }

  const getMenu=async(cursito)=>{
    const response = await axios.post(`${back.connection}/database/lessons/menu`,
        {
            id:cursito
        }
    );
    console.log("restrao23:",typeof response.data);
    console.log("restra:", response);
    setMenu(response.data);
  }

  return (
    <Container className="ViewLesson-container">
        <div className="ViewLesson-upper-container">
      
        <div className="ViewLesson-down-container">
        <h1 className="text-center mb-4">Leccion 1:{lesson.name}</h1>
      <div className="ratio ratio-16x9">
            <iframe
              title={lesson.name}
              src={lesson.video_url}
              allowFullScreen
            />
          </div>
          <p className="text-center fw-bold mt-2">{lesson.name}</p>
        
          
          
      <Card className="mb-4">
        <Card.Header>
          <h5>Informacion General</h5>
        </Card.Header>
        <Card.Body>
        {overview?overview.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          {item.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      )):null}
      

        </Card.Body>
      </Card>
      </div>
          
{/*
      <Card className="p-3">
            <h2 className="h5 fw-bold mb-3">Lecciones</h2>
            <Accordion flush>
            {menu ? menu.map((lec, index) => (
    lec.temas.map((tema, numb) => (
      <Accordion.Item eventKey={tema.id.toString()} key={numb}>
        <Accordion.Header className="ViewLesson-collapse">{tema.name}</Accordion.Header>
        tema.subtemas.map((uno, subIndex) => (
          <Accordion.Body key={subIndex}>
            Visit {uno.name}
          </Accordion.Body>
        ))
      </Accordion.Item>
    ))
  ))
 : null}
            </Accordion>
          </Card>
    */}
          </div>
      <div className="ViewLessons-mb-4">
        <Button variant="secondary">Back to Lessons</Button>
      </div>
    </Container>
  );
}

export default ViewLesson;