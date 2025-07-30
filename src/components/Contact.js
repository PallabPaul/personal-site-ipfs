import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      content: 'pallab.paul000@gmail.com',
      link: 'mailto:pallab.paul000@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      content: 'San Francisco, CA',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/pallabpaul/'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/PallabPaul'
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/PallabPaulll'
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.div variants={itemVariants}>
                <h2 className="section-title">Get In Touch</h2>
                <div className="section-divider"></div>
                <p className="section-description">
                  I'm always open to discussing new opportunities and interesting projects. 
                  Let's connect and create something amazing together!
                </p>
              </motion.div>
            </Col>
          </Row>

          <Row>
            <Col lg={8} className="mx-auto">
              <Row>
                {/* Contact Information */}
                <Col md={4} className="mb-4">
                  <motion.div variants={itemVariants}>
                    <div className="contact-info">
                      <h4 className="contact-info-title">Let's Talk</h4>
                      <p className="contact-info-description">
                        Ready to start your next project? I'd love to hear from you.
                      </p>
                      
                      <div className="contact-details">
                        {contactInfo.map((item, index) => (
                          <div key={index} className="contact-detail-item">
                            <div className="contact-icon">{item.icon}</div>
                            <div className="contact-content">
                              <h6>{item.title}</h6>
                              <a href={item.link} className="contact-link">
                                {item.content}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="contact-social">
                        <h6>Follow Me</h6>
                        <div className="social-links">
                          {socialLinks.map((social, index) => (
                            <a
                              key={index}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social-link"
                              title={social.name}
                            >
                              {social.icon}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Col>

                {/* Contact Form */}
                <Col md={8}>
                  <motion.div variants={itemVariants}>
                    <div className="contact-form-wrapper">
                      {showAlert && (
                        <Alert variant="success" className="mb-4">
                          Thank you for your message! I'll get back to you soon.
                        </Alert>
                      )}
                      
                      <Form onSubmit={handleSubmit} className="contact-form">
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Name *</Form.Label>
                              <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Your Name"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Email *</Form.Label>
                              <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="your.email@example.com"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        
                        <Form.Group className="mb-3">
                          <Form.Label>Subject *</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            placeholder="Project Discussion"
                          />
                        </Form.Group>
                        
                        <Form.Group className="mb-4">
                          <Form.Label>Message *</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            placeholder="Tell me about your project..."
                          />
                        </Form.Group>
                        
                        <Button 
                          type="submit" 
                          variant="primary" 
                          size="lg" 
                          className="contact-submit-btn w-100"
                        >
                          <FiSend className="me-2" />
                          Send Message
                        </Button>
                      </Form>
                    </div>
                  </motion.div>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
