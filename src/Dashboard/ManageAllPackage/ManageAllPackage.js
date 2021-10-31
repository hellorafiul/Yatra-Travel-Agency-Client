import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageAllPackage.css'

const ManageAllPackage = () => {
  const [services, setServices] = useState([])

  useEffect(() =>
    fetch('http://localhost:5000/productServices')
      .then(res => res.json())
      .then(data => setServices(data))
    , []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/deleteService/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            alert("Deleted Successfully")
            const remainingServices = services.filter(service => service._id !== id);
            setServices(remainingServices)
          }
        })
    }
  };

  return (
    <div>
      <h2 className='text-center py-4'>Currently {services.length} Packages Available  </h2>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Price</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {services?.map((service, index) => (
          <tbody key={service._id}>
            <tr >
              <td className="pt-5" style={{ "padding": "10px 20px" }}>{index}</td>
              <td ><img src={service?.image} alt="" style={{ "width": "150px", "height": "100px", "borderRadius": "5px" }} /></td>
              <td className="pt-5">${service?.price}</td>
              <td className="pt-5">{service?.name.substring(0, 50)}</td>
              <td className="pt-5">{service?.status}</td>
              <td className="pt-5"><button onClick={() => handleDelete(service._id)} className='text-danger btn'><i className="far fa-trash-alt"></i></button></td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageAllPackage;