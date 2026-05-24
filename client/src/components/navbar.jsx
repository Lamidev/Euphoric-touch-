import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = ({ scrollToSection, homeRef, aboutRef, servicesRef, bookingsRef, pricingRef }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">Fresha Massage Spa & Wellness</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection(homeRef)}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(aboutRef)}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(servicesRef)}>Services</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(pricingRef)}>Pricing</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(bookingsRef)}>Bookings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
