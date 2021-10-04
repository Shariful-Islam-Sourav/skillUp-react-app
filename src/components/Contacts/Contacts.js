import React from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import "./Contacts.css";

const Contacts = () => {
  return (
    <Container className="contacts-container">
      <h1 className="mt-5 text-center">Subscribe To Our Newsletter</h1>
      <InputGroup className="my-3">
        <FormControl placeholder="Provide Your Email" />
        <InputGroup.Text className="p-3" id="basic-addon2">
          Subscribe
        </InputGroup.Text>
      </InputGroup>
      <h2 className="text-center mt-5 mb-3 fw-bold">Contact us</h2>

      <h4>
        <i class="fas fa-phone"></i> 88023134232
      </h4>
      <h4>
        <i class="fas fa-envelope"></i> skillshare@edu.mail
      </h4>
      <h4>
        <i class="fas fa-headset"></i> 10023
      </h4>
      <h4>
        <i class="fab fa-discord"></i>/skillUp.gg
      </h4>
    </Container>
  );
};

export default Contacts;
