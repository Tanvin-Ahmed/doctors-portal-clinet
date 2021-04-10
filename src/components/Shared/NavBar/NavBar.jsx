import React from "react";
import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="none" expand="lg">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="mr-5" href="#home">Home</Nav.Link>
          <Nav.Link className="mr-5" href="#link">About</Nav.Link>
          <Nav.Link className="mr-5" href="#link">Dental Services</Nav.Link>
          <Nav.Link className="mr-5 text-light" href="#link">Reviews</Nav.Link>
          <Nav.Link className="mr-5 text-light" href="#link">Blogs</Nav.Link>
          <Nav.Link className="mr-5 text-light" href="#link">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
