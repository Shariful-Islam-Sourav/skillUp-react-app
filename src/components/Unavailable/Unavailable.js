import React from "react";
import { Container } from "react-bootstrap";
import img from "../../images/404.png";
import "./Unavailable.css";

const Unavailable = () => {
  return (
    <Container className="text-center unavailable">
      <img className="mt-5" src={img} alt="Not Available" />
    </Container>
  );
};

export default Unavailable;
