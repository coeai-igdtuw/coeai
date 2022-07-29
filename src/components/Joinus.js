import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import '../App.css';
import Navigation from '../container/Navigation';
import './Joinus.css';

function Joinus() {
    return (
        <div>
        <Navigation/>
            <h1>Join us page</h1>
            
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
       <div class="wrapper">
         <div class="button">
            <div class="icon">
               <i class="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
         </div>
         <div class="button">
            <div class="icon">
               <i class="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
         </div>
         <div class="button">
            <div class="icon">
               <i class="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
         </div>
         {/* <div class="button">
            <div class="icon">
               <i class="fab fa-codepen"></i>
            </div>
            <span>Codepen</span>
         </div> */}
         <div class="button">
            <div class="icon">
               <i class="fab fa-youtube"></i>
            </div>
            <span>YouTube</span>
         </div>
      </div>
   
        </div>
    );
  }
  
  export default Joinus;
