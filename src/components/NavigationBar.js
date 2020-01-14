import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const NavigationBar = props => (
  <>
    <Navbar sticky="top" bg="primary" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="contact">Contact</Nav.Link>
        <Nav.Link href="about">About</Nav.Link>
      </Nav>
    </Navbar>
  </>
);

export default NavigationBar;
