import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="about-section" id="about">
      <Container>
        <div className="fade-in">
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <div>
                <h2 className="section-title">About Me</h2>
                <div className="section-divider"></div>
              </div>
            </Col>
          </Row>
          
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about-content">
                <h3 className="about-subtitle">
                  Crafting Digital Solutions with Passion
                </h3>
                <p className="about-text">
                  I'm a dedicated software engineer with a passion for creating innovative 
                  digital solutions. With expertise spanning front-end and back-end development, 
                  I specialize in building scalable web applications using modern technologies 
                  like React, Node.js, and cloud platforms.
                </p>
                <p className="about-text">
                  My journey in software development has led me to work on diverse projects, 
                  from e-commerce platforms to data visualization tools. I believe in writing 
                  clean, maintainable code and staying up-to-date with the latest industry trends.
                </p>
                <p className="about-text">
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge through technical writing and 
                  community involvement.
                </p>
                
                <div className="about-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>Performance-focused development</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🎯</span>
                    <span>User-centric design approach</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">⚡</span>
                    <span>Agile development methodologies</span>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div>
                <Row className="stats-row">
                  {stats.map((stat, index) => (
                    <Col sm={6} key={index} className="mb-4">
                      <Card className="stat-card h-100">
                        <Card.Body className="text-center">
                          <div className="stat-number">{stat.number}</div>
                          <div className="stat-label">{stat.label}</div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;
