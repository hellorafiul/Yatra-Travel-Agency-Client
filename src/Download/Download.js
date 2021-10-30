import React from 'react';
import appimage from '../Images/app.png'
import apple from '../Images/apple.png';
import google from '../Images/google.png';
import './Download.css'

const Download = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={appimage} alt="" className='img-fluid' />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="text-center ps-5 py-5">
            <h3>Download Yatra App and Earn Trip Coin.</h3><br />
            <a href="#"><img src={apple} className='pe-3' alt="" /></a>
            <a href="#"><img src={google} className='' alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;