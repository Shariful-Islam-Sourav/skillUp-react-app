import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="about-container text-center">
      <h1 className="mt-3">About Us</h1>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Premium Quality Content</Card.Header>
            <Card.Body>
              <Card.Title>Best Content Provided</Card.Title>
              <Card.Text>
                We Focus on our courses quality first and optimize it for best
                performance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center border border-bottom-0 border-top-0 border-end-0">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>24/7 Support</Card.Header>
            <Card.Body>
              <Card.Title>Best Support</Card.Title>
              <Card.Text>
                Our mentors will give you 24 hours of support every single day.
                Feel free to ask them.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="d-flex justify-content-center">
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Job Facilities</Card.Header>
            <Card.Body>
              <Card.Title>Building Carriers</Card.Title>
              <Card.Text>
                We are not only to provide you the course, besides we will get
                you to the job market too!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center border border-bottom-0 border-top-0 border-end-0">
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>All in one Platform</Card.Header>
            <Card.Body>
              <Card.Title>Welcome Everyone</Card.Title>
              <Card.Text>
                We have built a strong platform where teachers and students are
                welcomed. They teach, they learn & have fun all together.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
