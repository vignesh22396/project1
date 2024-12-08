import React from 'react'
import Tilt from 'react-parallax-tilt';
import myImg from '../../../Assets/avatar.svg';
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";

const Home2 = () => {
  return (
    <>
        <section id='about'>
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                        LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                        I fell in love with programming and I have at least learnt
                        something, I think… 🤷‍♂️
                        <br />
                        <br />I enjoy working with <i>
                            <b className="purple"> HTML5, CSS3, JavaScript, Photoshop</b> and frameworks like <b className="purple">React.js </b>
                        </i>, while staying updated with the latest design trends.
                        <br />
                        <br />
                        I focus on optimizing website performance, ensuring fast load times, and using tools like <i><b className="purple">Vite</b></i> for efficient development workflows.
                        <br />
                        <br />
                        I thrive on collaborating with designers and developers, bridging the gap between design and functionality, and continuously learning to deliver innovative and impactful web solutions.
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                        <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                        Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                       
                        <li className="social-icons">
                            <a
                            href="mailto:rvignesh543@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                            >
                            <FaRegEnvelope />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href="https://www.instagram.com/vigneshr96/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                            >
                            <FaInstagram />
                            </a>
                        </li>
                        </ul>
                    </Col>
                    </Row>
            </Container>
        </section>
    </>
  )
}

export default Home2