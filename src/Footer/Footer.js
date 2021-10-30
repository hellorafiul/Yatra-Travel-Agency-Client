import React from 'react';
import './Footer.css';
import apple from '../Images/apple.png';
import google from '../Images/google.png';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container footer-area">
        <div className="row d-flex justify-content-between align-items-start py-5">
          <div className="col-md-7 footer-menu align-items-end">
            <div>
              <Link to="#">Awards since 1990 - 2020</Link>
              <Link to="#">Success Story</Link>
            </div>
            <div className="footer-menu py-2">
              <Link to="/home">Home</Link>
              <Link to="/services">Service</Link>
              <Link to="/about">About</Link>
              {/* <Link to="/contact">Contact</Link> */}
            </div>
            <div className="footer-social d-md-block d-none">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
            <p className="pt-4 d-md-block d-none">&copy; 2021 Yatra, Inc. All rights reserved</p>
          </div>
          <div className="col-md-4 d-lg-grid justify-content-end footer-right mt-4 mt-sm-0">
            <p className="text-white">Get the App</p>
            <a href="#"><img src={apple} className="d-block pb-3" alt="" /></a>
            <a href="#"><img src={google} alt="" /></a>
          </div>
          <div className="footer-social d-md-none pt-4">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
          <p className="d-md-none pt-4 text-white">&copy; 2021 Yatra, Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;