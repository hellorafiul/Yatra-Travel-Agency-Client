import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './AddCustomPackage.css'
import useAuth from './../../Hooks/useAuth';

const AddCustomPackage = () => {
  const { user } = useAuth();

  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.email = user?.email;
    data.status = 'Pending';
    fetch('http://localhost:5000/addCustomPackage', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.acknowledged) {
          alert('Thank you! Your Information Has Been Added To Our Database')
        }
        console.log(result)
      })
    console.log(user)
    reset();
  };

  return (
    <div>
      <h2 className='text-center pt-5'>Please Add Your Custom Package </h2>
      <div className="add-package-form mx-auto mt-5">
        <div className="package-box d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>

              <input placeholder="Name" {...register("name")} /> <br />
              <input placeholder="Price" {...register("price")} /> <br />
              <textarea placeholder="Description" {...register("description")} /> <br />
              <input placeholder="Image Link" {...register("image", { required: true })} /><br />

              {errors.exampleRequired && <span>This field is required</span>}<br />

              <input type="submit" value='Add Now' className='btn btn-primary w-100 text-center py-2 px-0' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomPackage;