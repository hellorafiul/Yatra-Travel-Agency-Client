import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';
const Details = () => {
    const { user } = useAuth();
    const { id } = useParams()
    const [details, setDetails] = useState([])
    const [specificDetail, setSpecificDetail] = useState({})


    useEffect(() =>
        fetch("http://localhost:5000/productServices")
            .then(res => res.json())
            .then(data => setDetails(data))
        , [])


    useEffect(() => {
        if (details.length > 0) {
            const matchedData = details.find(detail => detail._id == id)
            delete matchedData._id;
            setSpecificDetail(matchedData);
        }
    }, [details]);

    const handleBookNow = (order) => {
        fetch(`http://localhost:5000/bookNowTest/`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('You booking has been confirmed, Now cheek your dashboard!')
                }
            })


    }
    // console.log(user);
    return (

        <div className="container py-5 px-2">
            <img src={specificDetail?.image} alt="" className='pb-3 d-block mx-auto' />
            <h2>{specificDetail?.name}</h2>
            <h5>${specificDetail?.price}/PER</h5>
            <p>{specificDetail?.description}</p>
            <button onClick={() => handleBookNow({ email: user?.email, ...specificDetail })} className='btn btn-primary'>Book Now</button>
        </div>




    );
};

export default Details;