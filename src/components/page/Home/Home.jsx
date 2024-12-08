import React from 'react'
import './Home.css'
import { Col, Container, Row } from 'react-bootstrap'
import homeLogo from "../../../Assets/home-main.svg"
import Typewriter from 'typewriter-effect';
import Home2 from './Home2';

const Home = () => {
  return (
    <>
    <div className='home-section'>
    <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <section id='home'>
        <Container fluid id="home">
            <Container className="home-content">
                <Row>
                    <Col md={5} className="home-header">
                        <h1  style={{ paddingBottom: 15 }} className="heading">
                            Hi There 
                            <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>
                        <h2 className="heading-name">
                            I'M
                            <strong className="main-name"> Vignesh R</strong>
                        </h2>

                        <div style={{ padding: "50px", textAlign: "left" }}>
                            <Typewriter
                            options={{
                                strings: ['UI Developer', 'Front End Developer'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                            />
                        </div>

                    </Col>

                    <Col md={7} style={{paddingBottom: "20px",textAlign: "center"}}>
                        <img src={homeLogo} 
                        alt="pic"
                        className='img-fluid'
                        style={{maxHeight: "500px"}}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    </section>

    <Home2 />
    </div>
    </>
  )
}

export default Home