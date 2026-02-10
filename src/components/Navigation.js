import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi';

                href="https://drive.google.com/file/d/1YpWWwFFgNqedFv1udhHzW1LBMU1K4hwR/view?usp=sharing" 
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    // Update active section based on scroll position
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    if (current) {
      setActiveSection(current);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className="nav-slide-down">
      <Navbar 
        collapseOnSelect 
        expand="lg" 
        fixed="top" 
        className={`custom-navbar ${scrollPosition > 25 ? 'navbar-scrolled' : 'navbar-transparent'}`}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home" className="brand-logo">
            <span className="brand-hover">
              Pallab Paul
            </span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              {navItems.map((item, index) => (
                <Nav.Link 
                  key={index}
                  href={item.href} 
                  className={`nav-item ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
            
            <div className="navbar-cta">
              <Button 
                variant="outline-light" 
                size="sm"
                href="https://drive.google.com/file/d/1uyuuoSPkVecVZc1ukBWPFYVHoOnU3tJG/view" 
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
              >
                <FiDownload className="me-2" />
                Resume
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
