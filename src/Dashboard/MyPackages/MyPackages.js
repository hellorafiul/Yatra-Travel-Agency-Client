import React, { useState, useEffect } from 'react';
import useAuth from './../../Hooks/useAuth';
import { Table } from 'react-bootstrap';

const MyPackages = () => {
  const { user } = useAuth();
  const [books, setBook] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myBooking/${user?.email}`)
      .then(res => res.json())
      .then(data => setBook(data))
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    const url = `http://localhost:5000/deleteOrder/${id}`
    // return console.log(url);
    if (proceed) {
      fetch(url, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            alert("Deleted Successfully")
            const remainingServices = books.filter(service => service._id !== id);
            setBook(remainingServices)
          }
          console.log(data)
        }).catch(console.dir)
    }
  };

  return (
    <div>
      <h1>My order {books.length}</h1>
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
        {books?.map((service, index) => (
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

export default MyPackages;