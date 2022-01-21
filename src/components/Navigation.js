import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(scrollPosition)
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" bg={scrollPosition < 25 ? 'transparent' : 'dark'}  variant="dark">
    <Container>
    <Navbar.Brand href="#home">Pallab Paul</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="https://drive.google.com/file/d/1AaSfrFuFJKLaAUbCPhv9zlQcuiyffBWc/view">Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}