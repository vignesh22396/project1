import React from 'react'
import './Footer.css'
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {

    let date = new Date();
    let year = date.getFullYear();

  return (
    <div className="footer">
    <Container >
      <Row>
     
        <Col md="6" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="6" className="footer-body">
          <ul className="footer-icons">
            
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                target="_blank"
              >
                <FaRegEnvelope />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Footer