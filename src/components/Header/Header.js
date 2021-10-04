import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Container>
        <Navbar.Brand className="fw-bold">SkillUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className="text-decoration-none text-dark"
              activeStyle={{
                fontWeight: "bold",
              }}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className="text-decoration-none text-dark ms-2"
              activeStyle={{
                fontWeight: "bold",
              }}
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              className="text-decoration-none text-dark ms-2"
              activeStyle={{
                fontWeight: "bold",
              }}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="text-decoration-none text-dark ms-2"
              activeStyle={{
                fontWeight: "bold",
              }}
              to="/contacts"
            >
              Contacts
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
