import React from 'react';
import './Hero.css'
const Hero = () => {
  return (
    <div>
      <section id='hero' className='pt-5'>
        <div className='container align-items-center pb-5'>
          <h5 className='fw-bolder'>YATRA</h5>
          <h1>Exciting <span className='hero-special'> Schemes</span><br />
            just a click away</h1>
          <p> Cost friendly packages on your way. We offer you better deals. Check Out Amazing Santorini 7 days tour</p>
          <button className='hl-btn-primary'><span>Learn More</span> <i className="fas fa-angle-double-right btn-i"></i></button>
        </div>
      </section>
    </div>
  );
};

export default Hero;