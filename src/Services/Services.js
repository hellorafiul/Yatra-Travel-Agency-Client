import React, { useEffect, useState } from 'react';
import ServiceContent from '../ServiceContent/ServiceContent';
import './Service.css'

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() =>
        fetch('http://localhost:5000/productServices')
            .then(res => res.json())
            .then(data => setServices(data))
        , [])

    return (
        <div className="container service">
            <h2>Popular Packages</h2>
            <div className="row">
                {
                    services.map((service => <ServiceContent key={service._id} service={service}>

                    </ServiceContent>))
                }
            </div>
        </div>
    );
};

export default Services;