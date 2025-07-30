import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaDocker, FaAws, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiPostgresql, SiRedis, 
  SiKubernetes, SiTailwindcss, SiNextdotjs, SiExpress 
} from 'react-icons/si';

const Skills = () => {
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
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90, icon: <FaReact /> },
        { name: 'JavaScript', level: 85, icon: <FaJs /> },
        { name: 'TypeScript', level: 80, icon: <SiTypescript /> },
        { name: 'Next.js', level: 85, icon: <SiNextdotjs /> },
        { name: 'HTML5', level: 95, icon: <FaHtml5 /> },
        { name: 'CSS3', level: 90, icon: <FaCss3Alt /> },
        { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss /> }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, icon: <FaNodeJs /> },
        { name: 'Express.js', level: 80, icon: <SiExpress /> },
        { name: 'Python', level: 75, icon: <FaPython /> },
        { name: 'MongoDB', level: 80, icon: <SiMongodb /> },
        { name: 'PostgreSQL', level: 75, icon: <SiPostgresql /> },
        { name: 'Redis', level: 70, icon: <SiRedis /> }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 90, icon: <FaGitAlt /> },
        { name: 'Docker', level: 75, icon: <FaDocker /> },
        { name: 'AWS', level: 70, icon: <FaAws /> },
        { name: 'Kubernetes', level: 65, icon: <SiKubernetes /> }
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
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
                <h2 className="section-title">Technical Skills</h2>
                <div className="section-divider"></div>
                <p className="section-description">
                  A comprehensive overview of my technical expertise and proficiency levels
                </p>
              </motion.div>
            </Col>
          </Row>

          <Row>
            {skillCategories.map((category, categoryIndex) => (
              <Col lg={4} md={6} key={categoryIndex} className="mb-4">
                <motion.div variants={itemVariants} className="skill-category">
                  <div className="skill-category-header">
                    <h4 className="skill-category-title">{category.title}</h4>
                  </div>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-info">
                          <div className="skill-icon">{skill.icon}</div>
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-progress">
                          <motion.div
                            className="skill-progress-bar"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
