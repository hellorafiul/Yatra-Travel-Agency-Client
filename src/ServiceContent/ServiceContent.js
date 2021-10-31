import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceContent.css'

const ServiceContent = (props) => {
    const { key, image, name, price, description, _id } = props.service || {}
    // console.log(_id)

    const history = useHistory()

    const handleDetails = (key) => {
        const uri = `/details/${key}`
        history.push(uri)
    }

    return (
        <div className="col-md-4">
            <div className="card mb-5 service">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body p-0 pb-3">
                    <div className="package-image p-0">
                        <div className="package-price d-flex align-items-center text-center">
                            <div className="deal-rating">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star-o"></span>
                                <span className="fa fa-star-o"></span>
                            </div>
                            <p className='pt-3'>${price} / Per </p>
                        </div>
                    </div>

                    <h5 className="card-title px-3 pb-2 fs-3">{name.substring(0, 25)}</h5>
                    <p className="card-text px-3">{description.substring(0, 190)}...</p>

                </div>
                <button onClick={() => handleDetails(_id)} className="btn btn-primary">View Details</button>
            </div>
        </div>
    );
};

export default ServiceContent;