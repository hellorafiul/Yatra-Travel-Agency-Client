import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Details = () => {

    const { id } = useParams()
    const [details, setDetails] = useState([])
    const [specificDetail, setSpecificDetail] = useState({})


    useEffect(() =>
        fetch("/productServices.json")
            .then(res => res.json())
            .then(data => setDetails(data))
        , [])


    useEffect(() => {
        if (details.length > 0) {
            const matchedData = details.find(detail => detail.key == id)
            setSpecificDetail(matchedData);
        }

    }

        , [details])
    return (

        <div className="container py-5 px-2">
            <img src={specificDetail?.image} alt="" className='pb-3 d-block mx-auto' />
            <h2>{specificDetail?.name}</h2>
            <h5>${specificDetail?.price}/PER</h5>
            <p>{specificDetail?.description}</p>
        </div>




    );
};

export default Details;