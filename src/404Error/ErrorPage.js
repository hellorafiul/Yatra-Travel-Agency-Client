import React from 'react';
import './ErrorPage.css'
import { Link } from "react-router-dom";
import errorImg from '../Images/error2.jpg'

const ErrorPage = () => {
  return (
    <div className='error-page text-center'>
      <img src={errorImg} alt="" className="img-fluid" />
      <button className="pb-2 px-5 mb-5 btn btn-danger"><Link className='errorBtn' to="/">Back to Home</Link></button>
    </div>
  );
};

export default ErrorPage;