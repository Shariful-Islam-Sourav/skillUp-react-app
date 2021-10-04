import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const Service = (prop) => {
  const { name, price, instructor, lessons, students, img } = prop.courses;
  return (
    <Col>
      <Card className="shadow-lg border-0 rounded-lg">
        <Card.Img variant="top" src={img} />
        <Card.Body className="p-4">
          <Card.Title className="fw-bold">{name}</Card.Title>
          <h3>${price}</h3>
          <p className="text-success">
            <i className="fas fa-user"></i> {instructor}
          </p>
          <div className="d-flex align-items-center">
            <p>
              <i className="fas fa-book-open"></i> {lessons} Lessons
            </p>
            <p className="ms-3">
              <i className="fas fa-users"></i> {students} Students
            </p>
          </div>
          <Button variant="success">See Details</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
