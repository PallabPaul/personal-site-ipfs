import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI, secure payment processing, and admin dashboard. Built with React, Node.js, and MongoDB.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      liveLink: '#',
      githubLink: '#',
      featured: true
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'A data visualization dashboard that displays weather patterns and analytics with interactive charts and real-time data updates.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      technologies: ['React', 'D3.js', 'Python', 'Flask', 'APIs'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'Social Media Platform',
      description: 'A social networking platform with user authentication, post sharing, real-time messaging, and content moderation features.',
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      technologies: ['Next.js', 'GraphQL', 'Redis', 'AWS S3'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'A real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis tools.',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      technologies: ['React', 'Chart.js', 'CoinGecko API', 'Firebase'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    },
    {
      title: 'Learning Management System',
      description: 'An online learning platform with course creation, progress tracking, video streaming, and interactive quizzes.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      technologies: ['React', 'Node.js', 'MongoDB', 'Video.js'],
      liveLink: '#',
      githubLink: '#',
      featured: false
    }
  ];

  const featuredProject = projects.find(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section className="projects-section" id="projects">
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
                <h2 className="section-title">Featured Projects</h2>
                <div className="section-divider"></div>
                <p className="section-description">
                  A showcase of my recent work and technical achievements
                </p>
              </motion.div>
            </Col>
          </Row>

          {/* Featured Projects */}
          <Row className="mb-5">
            {projects.filter(p => p.featured).map((project, index) => (
              <Col lg={6} key={index} className="mb-4">
                <motion.div variants={itemVariants}>
                  <Card className="project-card featured-project h-100">
                    <div className="project-image-wrapper">
                      <Card.Img variant="top" src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <div className="project-links">
                          <Button 
                            variant="light" 
                            size="sm" 
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-2"
                          >
                            <FiExternalLink />
                          </Button>
                          <Button 
                            variant="light" 
                            size="sm"
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FiGithub />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title className="project-title">{project.title}</Card.Title>
                      <Card.Text className="project-description">
                        {project.description}
                      </Card.Text>
                      <div className="project-technologies">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Regular Projects Grid */}
          <Row>
            {regularProjects.map((project, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <motion.div variants={itemVariants}>
                  <Card className="project-card h-100">
                    <div className="project-image-wrapper">
                      <Card.Img variant="top" src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <div className="project-links">
                          <Button 
                            variant="light" 
                            size="sm" 
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-2"
                          >
                            <FiExternalLink />
                          </Button>
                          <Button 
                            variant="light" 
                            size="sm"
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FiGithub />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title className="project-title">{project.title}</Card.Title>
                      <Card.Text className="project-description">
                        {project.description}
                      </Card.Text>
                      <div className="project-technologies">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
