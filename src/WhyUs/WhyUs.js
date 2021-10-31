import React from 'react';
import book from '../Images/booking.jpg'
import './WhyUs.css'
const WhyUs = () => {
  return (
    <section className='why-us container'>
      <h2>Why Choose Us!</h2>
      <div className="row text-center">
        <div className="col-md-4 py-5">
          <div className="pb-4">
            <div className='icon mx-auto'>
              <i className="far fa-calendar-alt"></i>
            </div>
            <h3>Fast Booking</h3>
            <p>Enjoy buying your bus tickets online from home or on the go, with our mobile friendly site.</p>
          </div>
          <div>
            <div className='icon mx-auto'>
              <i className="fas fa-dollar-sign"></i>
            </div>

            <h3>Spend Less</h3>
            <p>Travel to many destinations for less than $100! We have the LOWEST prices and the BEST carriers all in one place.</p>
          </div>
        </div>
        <div className="col-md-4 pt-5">
          <img src={book} alt="" />
        </div>
        <div className="col-md-4 py-5">
          <div className="pb-4">
            <div className='icon mx-auto'>
              <i className="fas fa-snowboarding"></i>
            </div>
            <h3>Stress Free</h3>
            <p>The simplest and stress free way to book your bus travel all in one purchase.</p>
          </div>
          <div className=''>
            <div className='icon mx-auto'>
              <i className="fas fa-hiking"></i>
            </div>
            <h3>Travel More</h3>
            <p>Bus travel is one of the most economic and efficient ways to travel. Save More, Travel More... Adventure Awaits!</p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default WhyUs;