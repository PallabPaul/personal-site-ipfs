import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led development of scalable web applications serving 100K+ users',
        'Architected microservices using Node.js and containerization with Docker',
        'Mentored junior developers and established coding best practices',
        'Reduced application load time by 40% through performance optimization'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Collaborated with UX/UI designers to implement responsive designs',
        'Integrated third-party APIs and payment processing systems',
        'Implemented automated testing to achieve 95% code coverage'
      ],
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Git', 'Jest']
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: [
        'Built responsive web interfaces using modern JavaScript frameworks',
        'Optimized application performance and improved user experience',
        'Worked closely with backend team to design efficient APIs',
        'Participated in agile development process and sprint planning'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery']
    }
  ];

  return (
    <section className="experience-section" id="experience">
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
                <h2 className="section-title">Work Experience</h2>
                <div className="section-divider"></div>
                <p className="section-description">
                  My professional journey and key achievements in software development
                </p>
              </motion.div>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                  >
                    <div className="timeline-marker"></div>
                    <Card className="experience-card">
                      <Card.Body>
                        <div className="experience-header">
                          <h4 className="experience-title">{exp.title}</h4>
                          <h5 className="experience-company">{exp.company}</h5>
                          <div className="experience-meta">
                            <span className="experience-period">
                              <FiCalendar className="me-1" />
                              {exp.period}
                            </span>
                            <span className="experience-location">
                              <FiMapPin className="me-1" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        
                        <ul className="experience-description">
                          {exp.description.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                        
                        <div className="experience-technologies">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
