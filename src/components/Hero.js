import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaXTwitter, FaYoutube } from 'react-icons/fa6';
import profilePic from './images/profilepic.png';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section">
      <div 
        className="mouse-follower"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col lg={10} className="text-center">
            <div className="hero-content">
              <div className="greeting-container">
                <div className="profile-image-container">
                  <img 
                    src={profilePic} 
                    alt="Pallab Paul" 
                    className="profile-image"
                  />
                </div>
                <div className="greeting-badge">
                  <span>👋 Hello, I'm</span>
                </div>
              </div>
              
              <h1 className="hero-name">
                <span className="name-gradient">Pallab</span>
                <span className="name-accent"> Paul</span>
              </h1>
              
              <h2 className="hero-title">
                <span className="typing-text">Software Engineer</span>
                <span className="cursor">|</span>
              </h2>
              
              <div className="hero-links">
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="link-button resume-btn"
                  href="https://drive.google.com/file/d/1YpWWwFFgNqedFv1udhHzW1LBMU1K4hwR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiDownload className="me-2" />
                  Resume
                </Button>
                
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="link-button github-btn"
                  href="https://github.com/PallabPaul" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FiGithub className="me-2" />
                  GitHub
                </Button>
                
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="link-button linkedin-btn"
                  href="https://linkedin.com/in/pallabpaul/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FiLinkedin className="me-2" />
                  LinkedIn
                </Button>
                
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="link-button twitter-btn"
                  href="https://x.com/pallabpaulll" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="me-2" />
                  X
                </Button>
                
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="link-button youtube-btn"
                  href="https://youtube.com/@pallabpaulll" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="me-2" />
                  YouTube
                </Button>
                
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="link-button email-btn"
                  href="mailto:pallab.paul000@gmail.com"
                >
                  <FiMail className="me-2" />
                  Email
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
