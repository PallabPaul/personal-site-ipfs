import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/pallabpaul/',
      name: 'LinkedIn'
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/PallabPaul',
      name: 'GitHub'
    },
    {
      icon: <FaTwitter />,
      url: 'https://twitter.com/PallabPaulll',
      name: 'Twitter'
    },
    {
      icon: <FiMail />,
      url: 'mailto:pallab.paul000@gmail.com',
      name: 'Email'
    }
  ];

  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <div className="footer-brand">
              <h5>Pallab Paul</h5>
              <p className="footer-tagline">
                Crafting digital experiences with passion and precision
              </p>
            </div>
          </Col>
          
          <Col md={6} className="text-center text-md-end">
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>
        
        <hr className="footer-divider" />
        
        <Row>
          <Col className="text-center">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Pallab Paul. Made with <FaHeart className="heart-icon" /> using React
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}