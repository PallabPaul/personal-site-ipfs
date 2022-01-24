import React from 'react';
import Typist from "react-typist";
import profilepic from "./images/profilepic.png"

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLinkedin,
    faGithub,
    faTwitter,
    faYoutube,
    faGoogle
} from "@fortawesome/free-brands-svg-icons";


export default function About() {
    return (
        <Container>
            <Row>
                <Col align="center" id="padded-col">
                    <Typist cursor={{ show: false }} startDelay={100}>
                        <h1>Hi, I'm Pallab.</h1>
                        <h1>Software Engineer</h1>
                    </Typist>
                </Col>
                <Col align="center">
                    <img src={profilepic} alt="" 
                    style={{
                        width: 250,
                        height: 250,
                        borderRadius: 250 / 2
                      }}
                    />;
                </Col>
            </Row>
            <Row id="padded-row">
                <Col align="center">
                    <a
                        href="https://linkedin.com/in/pallabpaul/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin social"
                     >
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>
                </Col>
                <Col align="center">
                    <a
                        href="https://github.com/PallabPaul"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github social"
                     >
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                </Col>
                <Col align="center">
                    <a
                        href="https://twitter.com/PallabPaulll"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="twitter social"
                     >
                    <FontAwesomeIcon icon={faTwitter} size="3x" />
                    </a>
                </Col>
                <Col align="center">
                    <a
                        href="https://youtube.com/channel/UCY1bQZW2OMrAyn-V-T4NPXg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube social"
                     >
                    <FontAwesomeIcon icon={faYoutube} size="3x" />
                    </a>
                </Col>
                <Col align="center">
                    <a
                        href="mailto:pallab.paul000@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gmail social"
                     >
                    <FontAwesomeIcon icon={faGoogle} size="3x" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
  }