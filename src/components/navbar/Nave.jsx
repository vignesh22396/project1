import React, { useState } from 'react';
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaFileAlt } from "react-icons/fa";

const Nave = () => {

  const [expand, updateExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const [nav, setNav] = useState('home')

  function scrollHandler() {
    if(window.scrollY >= 120){
      setNavColour(true);
    }else{
      setNavColour(false);
    }
  }

  window.addEventListener('scroll', scrollHandler)

  return (
    // <Navbar expand="lg" className="bg-body-tertiary">
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="#">VR</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive_navbar"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive_navbar">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100vh' }}
            navbarScroll
          >
            <Nav.Link 
              className={nav === 'home' ? 'active_menu' : ''}
              href='#home' 
              onClick={() => {
                updateExpanded(false);
                setNav('home');
              }}
            >
              <FaHome />
              Home
            </Nav.Link>

            <Nav.Link 
              className={nav === 'about' ? 'active_menu' : ''}
              href='#about'
              onClick={() => {
                updateExpanded(false);
                setNav('about');
              }}
            >
              <FaUser />
              About
            </Nav.Link>
          
            {/* <Nav.Link
            className={nav === 'projects' ? 'active_menu' : ''}
              as={Link}
              to='/projects'
              onClick={() => {
                updateExpanded(false);
                setNav('projects');
              }}
            >
              Projects
            </Nav.Link> */}

            <Nav.Link 
            className={nav === 'resume' ? 'active_menu' : ''}
              as={Link}
              to='/resume'
              onClick={() => {
                updateExpanded(false);
                setNav('resume');
              }}
            >
              <FaFileAlt />
              Resume
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nave;