import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceContent.css'

const ServiceContent = (props) => {
    const { key, image, name, price, description } = props.service || {}


    const history = useHistory()

    const handleDetails = (key) => {
        const uri = `/details/${key}`
        history.push(uri)
    }

    return (
        <div className="col-md-4">
            <div className="card mb-5">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body p-0 pb-3">
                    <div class="package-image p-0">
                        <div class="package-price d-flex align-items-center text-center">
                            <div class="deal-rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star-o"></span>
                                <span class="fa fa-star-o"></span>
                            </div>
                            <p className='pt-3'>${price} / Per </p>
                        </div>
                    </div>

                    <h5 className="card-title px-3 pb-2 fs-3">{name}</h5>
                    <p className="card-text px-3">{description.substring(0, 190)}...</p>

                </div>
                <button onClick={() => handleDetails(key)} className="btn btn-primary">Book Now</button>
            </div>
        </div>
    );
};

export default ServiceContent;