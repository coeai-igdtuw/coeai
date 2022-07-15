import React, {Component} from 'react';
import { BrowserRouter as Router, Routes} from "react-router-dom";
import '../App.css';
import './Home.css';
import IGDTUW2 from "../images/IGDTUW2.jpg"
import goilogo from "../images/goilogo.jpg";
import logo from "../images/logo.png";
import {Nav,NavbarBrand,Navbar, NavDropdown, } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Home() {
    return (
        <div >
        <div>
        <div id="coverTitle" className="w-100" >
        <div className="row container">
          <div className="col-5 ">
          <div className="d-flex align-items-center justify-content-center" style={{height:100, fontSize:20, textAlign:'center',position:'relative',left:70 }}>
               CENTRE OF EXCELLENCE IN ARTIFICIAL INTELLIGENCE </div>
          </div>
          <div className="col-2">
            <div className="d-flex align-items-center justify-content-center" style={{height:100,textAlign:'center',position:'relative',left:110 }}>
              <img src={logo} alt="this is college logo" className='photo' />
               </div>
          </div>
          <div className="col-5">
            <div className="d-flex align-items-center justify-content-center" style={{height:100, fontSize:20,position:'relative',left:140}}>
               INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN  </div>
          </div>
        </div>
      </div>
      </div>
      <div  className='bgimage'></div>
      <>
      <Navbar bg="light" varient= "bright" sticky="top" expand="lg">
                <NavbarBrand>
                    <img src={logo} width="40px" height="40px"/>
                    INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN
                </NavbarBrand>
                <Nav>
            
                <a className="nav-link nv-link" href="/">Home</a>
                <a className="nav-link nv-link" href="/People">People</a>

                <NavDropdown title= "Research">
                <NavDropdown.Item herf="Research/Nlp">NLP</NavDropdown.Item>
                <NavDropdown.Item  herf="Research/ImageRecognition"> Image recognition</NavDropdown.Item>
                <NavDropdown.Item herf="Research/ComputerVision"> Computer Vision</NavDropdown.Item>
                <NavDropdown.Item herf="Research/SpeechTech"> Speech technology</NavDropdown.Item>
                </NavDropdown> 

                <Nav.Link herf ="Event">Event</Nav.Link>

                <NavDropdown title= "Outreach Program">
                <NavDropdown.Item as={Link} to="/Outreach/Projects">Projects</NavDropdown.Item>
                <NavDropdown.Item herf="Outreach/Products"> Products</NavDropdown.Item>
                <NavDropdown.Item herf="Outreach/Patents"> Patents</NavDropdown.Item>
                <NavDropdown.Item herf="Outreach/Publications"> Publications</NavDropdown.Item>
                </NavDropdown> 

                <Nav.Link as={Link} to="/Conference">Conference</Nav.Link>
                <Nav.Link herf ="Joinus">Joinus</Nav.Link>
                <Nav.Link herf ="Partnership">Partnership</Nav.Link>

        </Nav>
            </Navbar>
            </>
    {/* <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link nv-link" href="/">Home</a>
  </li>
<li className="nav-item">
<a className="nav-link nv-link" href="/People">People</a>
  </li>
<li className="nav-item">
<a className="nav-link nv-link" href="/Courses">Courses</a>
  </li>
<li className="nav-item">
<a className="nav-link nv-link" href="/Partnership">Partnership</a>
  </li>
  <li className="nav-item">
  <a className="nav-link nv-link" href="/Outreach">Outreach</a>
  </li>
  <li className="nav-item">
  <a className="nav-link nv-link" href="/Event">Events</a>
  </li>

  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Research</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="/Event">Project</a></li>
      <li><a className="dropdown-item" href="/Outreach">Patents</a></li>
      <li><a className="dropdown-item" href="/Outreach">Publication</a></li>
      <li><a className="dropdown-item" href="/Outreach">Products</a></li>
    </ul>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li className="nav-item">
  <a className="nav-link nv-link" href="/JoinUS">JoinUs</a>
  </li>
</ul> */}
           
           {/* <nav className="navbar rounded  navbar-expand-lg navbar-light bg-light
            mid_nav nvbar "> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown" >
              <div className="row text-center w-100">
                <div className="col border-right border-dark p-1"> 
                  <a className="nav-link nv-link" href="/">Home</a>
                </div>
                <div className="col border-right border-dark p-1"> 
                  <a className="nav-link nv-link" href="/People">People</a>
                </div>
                <div className="col border-right border-dark p-1"> 
                  <a className="nav-link nv-link" href="/Courses">Courses</a>
                </div>
                <div className="col border-right border-dark p-1"> 
                  <a className="nav-link nv-link" href="/Research">Research</a>
                </div>
                <div className="col border-right border-dark p-1"> 
                  <a className="nav-link nv-link" href="/Partnership">Partnership</a>
                </div>
                <div className="col border-right border-dark p-1"> 
                  <a className="nav-link nv-link" href="/Outreach">Outreach</a>
                </div>
                <div className="col border-right border-dark p-1"> 
                  <a className="nav-link nv-link" href="/Events">Events</a>
                </div>
                <div className="col p-1"> 
                  <a className="nav-link nv-link" href="/JoinUS">JoinUs</a>
                </div>
              </div>
          </div></nav> */}
           
           
                           <div>SUPPORTED BY</div>
                              <div><img src={goilogo} alt="this is college logo" className='photo' /></div>
                             <div>Department of Science and Technology</div>
                        <div>GOI</div>

 
        </div>
    );
  }
  
  export default Home;
