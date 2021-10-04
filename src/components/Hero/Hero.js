import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section d-flex align-items-center">
      <Container className="text-white">
        <Row>
          <Col>
            <h4 className="text-dark">Educationl & Skills</h4>
            <h1 className="fw-bold title">A New Way To Learn</h1>
            <h1 className="fw-bold title">With Skill Up!</h1>
            <Link to="/services">
              <Button variant="success fw-bold ms-1 mt-4">Our Courses</Button>
            </Link>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
