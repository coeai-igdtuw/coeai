import React from 'react';
import '../App.css';
import Navigation from '../container/Navigation';
import './Joinus.css';

function Joinus() {
    return (
        <div className='bb'>

        <Navigation/>
            <h1 className='pat'>Join us page</h1>
            
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
       <div className="wrapper">
         <div className="button">
            <div className="icon">
               <i className="fab fa-facebook-f"></i>
            </div>
            <a href='https://www.facebook.com/igdtuw.delhi.5' target="_blank" rel="noopener noreferrer">    <span>Facebook</span></a>
         </div>
         <br></br>
         <div className="button">
            <div className="icon">
               <i className="fab fa-twitter"></i>
            </div>
            <a href='https://mobile.twitter.com/igdtuw_delhi' target="_blank" rel="noopener noreferrer">  <span>Twitter</span></a>
         </div>
         <br></br>

         <div className="button" >
            <div className="icon">
               <i className="fab fa-linkedin"></i>
            </div>
          <a href='https://www.linkedin.com/school/indira-gandhi-delhi-technical-university-for-women-new-delhi/' target="_blank" rel="noopener noreferrer"> <span >Linkedin</span></a>
            
         </div>
         <br></br>
         <div className="button">
            <div className="icon">
               <i className="fab fa-youtube"></i>
            </div>
            <a href='https://www.youtube.com/channel/UCKmYhevZ59gJJP0ZbpReBKA' target="_blank" rel="noopener noreferrer">     <span>YouTube</span></a>
         </div>
      </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
        </div>

      
    );
  }
  
  export default Joinus;
