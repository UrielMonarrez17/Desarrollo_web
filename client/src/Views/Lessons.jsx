import { useState } from "react";
import { Card, Button, Container, Row, Col, Accordion } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../styles/Lessons.css";

function ViewLesson() {
  const { course_id } = useParams();
  const [lesson, setLesson] = useState({
    title: "Lesson 1: Introduction",
    description: "This is the first lesson",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoTitle: "Lesson 1 Video",
    resources: [
      { title: "Resource 1", link: "https://example.com/resource1" },
      { title: "Resource 2", link: "https://example.com/resource2" },
    ],
  });

  return (
    <Container className="ViewLesson-container">
        <div className="ViewLesson-upper-container">
      
        <div className="ViewLesson-down-container">
        <h1 className="text-center mb-4">{lesson.title}</h1>
      <div className="ratio ratio-16x9">
            <iframe
              title={lesson.title}
              src={lesson.video}
              allowFullScreen
            />
          </div>
          <p className="text-center fw-bold mt-2">{lesson.videoTitle}</p>
        
          
          
      <Card className="mb-4">
        <Card.Header>
          <h5>Lesson Overview</h5>
        </Card.Header>
        <Card.Body>
          <p>{lesson.description}</p>
          <p>{lesson.content}</p>
        </Card.Body>
      </Card>
      </div>
          
          
      <Card className="p-3">
            <h2 className="h5 fw-bold mb-3">Resources</h2>
            <Accordion flush>
              {lesson.resources.map((resource, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header className="ViewLesson-collapse">{resource.title}</Accordion.Header>
                  <Accordion.Body >
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      Visit {resource.title}
                    </a>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Card>
          </div>
      <div className="ViewLessons-mb-4">
        <Button variant="secondary">Back to Lessons</Button>
      </div>
    </Container>
  );
}

export default ViewLesson;