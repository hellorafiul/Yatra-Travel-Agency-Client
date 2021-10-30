import React from 'react';
import aboutImg from '../Images/about-min.jpg'
import signature from '../Images/signature.png'
import { Link } from "react-router-dom";
import './About.css'
import WhyUs from './../WhyUs/WhyUs';
const About = () => {
  return (
    <>
      <div className='container my-5 about'>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img className="img-fluid p-5" src={aboutImg} alt="" />
          </div>
          <div className="col-md-6 about-right">
            <img className="img-fluid p-5" src={signature} alt="" />
            <h2 className="ps-0 ms-0 text-left">About Yatra</h2>
            <h3>Jane Guerrero</h3>
            <p>Yatra is a full-service Outbound Tour Operator in all over the world.</p>
            <p>We a 100% tourism professional with knowledge of most of the destinations and services in the world for people to enjoy. Our specialized departments with expertise offer a variety of services. Each department works independently to provide the best services to our customers& clients and become the best travel agency in Bangladesh, focusing on creating friendship and a long-lasting relationship with our beloved clients. In the year 2013, we decided to create a tour company by the name</p>
            <li>Certified travel agency by Government</li>
            <li>IATA Accredited Agent (Code: 42337654)</li>
            <li>Proud member of Association of Travel Agents of ATAB</li>
            <li>Proud member of Tour Operators Association of TOAB</li>
            <li>Proud member of Bangladesh Outbound Tour Operators Forum (BOTOF)</li>
            <li>Active alliances and networking with other agencies to serve its international clientele</li>
            <li>Growing corporate clients</li><br />
            <p>Moreover, Yatra is also pleased and appreciative to the staff and personnel who are considered teammates of this company thus helping the staff to upgrade their skills through continuous formal and hands-on training and seminars towards achieving total customer satisfaction and well-being. Their full dedication helps us to become the best travel agency in the world.  </p>
            <Link className='link' to="#">READ MORE </Link>
          </div>
        </div>
      </div>
      <WhyUs></WhyUs>
    </>
  );
};

export default About;