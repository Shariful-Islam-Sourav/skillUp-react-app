import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Hero from "../Hero/Hero";
import HomeServices from "../HomeServices/HomeServices";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 4)));
  }, []);
  return (
    <div>
      <Hero />
      <Container className="my-5">
          <h2 className="text-center mb-4 fw-bold">Our Top Courses</h2>
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <HomeServices services={service} key={service.id} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
