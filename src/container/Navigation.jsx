import React from 'react';
import './Nav.css';

import logo from '../images/logo.png';
import home from '../images/home.png';

import {Nav,NavbarBrand,Navbar, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Navigation(){
    
        // const myStyle={
        //     textDecoration: 'none',
        //     padding: "10px",
        //     fontFamily: "Arial",
        //     color: "black",
            
        // }
    return (
        
        <>
        <Navbar className='othernav' bg="light" varient= "bright" sticky="top" expand="lg">
                  <NavbarBrand className='logonav' as={Link} to="/" style={{fontFamily:"serif", textAlign:'center', fontSize:'1.5vw'}} >
                    <img src={logo}  alt ="logo" style={{height:'5vh', width:'5vh'}}/>
                      Indira Gandhi Delhi Technical University For Women
                  </NavbarBrand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
                  <Nav className='pagenav' style={{fontSize:'2.5vh'}}>
                  <Nav.Link className='allnav' as={Link} to="/">
                  <img src={home} alt="logo" style={{height:'2vh', width:'2vh'}}/></Nav.Link>
                  <Nav.Link className='allnav' as={Link} to="/Aboutus">About us</Nav.Link>
                  <Nav.Link className='allnav'as={Link} to="/Conference">AIST-2021</Nav.Link>
                  <Nav.Link className='allnav'as={Link} to="/Event">Event</Nav.Link>
                  <Nav.Link className='allnav'as={Link} to="/People">People</Nav.Link>
  
                  <NavDropdown className='allnav' title= "Research">
                  <NavDropdown.Item className='allnav'as={Link} to="/Research/Nlp">NLP</NavDropdown.Item>
                  <NavDropdown.Item className='allnav' as={Link} to="/Research/ImageRecognition"> Image recognition</NavDropdown.Item>
                  <NavDropdown.Item className='allnav'as={Link} to="/Research/ComputerVision"> Computer Vision</NavDropdown.Item>
                  <NavDropdown.Item className='allnav'as={Link} to="/Research/SpeechTech"> Speech technology</NavDropdown.Item>
                  </NavDropdown> 
  
  
                  <NavDropdown className='allnav' title= "Outreach Program">
                  <NavDropdown.Item className='homenav'as={Link} to="/Outreach/SummerInternship">Summer Internship</NavDropdown.Item>
                  <NavDropdown.Item className='homenav'as={Link} to="/Outreach/WinterInternship"> Winter Internship</NavDropdown.Item>
                  </NavDropdown> 
  
                  <Nav.Link className='allnav'as={Link} to="/Partnership">Partnership</Nav.Link>
                  <Nav.Link className='allnav'as={Link} to="/Joinus">Join Us</Nav.Link>
  
          </Nav>
          </Navbar.Collapse>
              </Navbar>
              </>
    );
}

export default Navigation;