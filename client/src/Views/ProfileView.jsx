import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "../styles/ProfileView.css";
const ProfileView = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [theme, setTheme] = useState("light");

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col >
          <Card>
            <Card.Header>
              <h5>Profile</h5>
              <small>View and edit your profile information.</small>
            </Card.Header>
            <Card.Body>
              <Row className="align-items-center mb-4">
                <Col xs="auto">
                  <img
                    src="https://github.com/nutlope.png"
                    alt="Avatar"
                    className="rounded-circle"
                    style={{ width: "60px", height: "60px" }}
                  />
                </Col>
                <Col>
                  <h6 className="mb-0">{name}</h6>
                  <small className="text-muted">{email}</small>
                </Col>
              </Row>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="name">Name</Form.Label>
                  <Form.Control
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="theme">Theme</Form.Label>
                  <Form.Select
                    id="theme"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" className="w-100">
                Save Changes
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileView;