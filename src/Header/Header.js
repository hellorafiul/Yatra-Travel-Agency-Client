import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';
import logo from '../Images/Yatra.png'

const Header = () => {

  const { user, logOut } = useAuth()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="mx-e collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              <Link className="text-decoration-none" to="/home">Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="text-decoration-none" to="/about">About</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="text-decoration-none" to="/services">Services</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="text-decoration-none" to="/dashboard">Dashboard</Link>
            </li>

            {

              user.email ?
                <div><p>Howdy, {user?.displayName}!</p>
                  <button className="btn btn-primary" onClick={logOut}> Sign Out</button>
                </div>
                :
                <li className="nav-item mx-3">
                  <Link className="text-decoration-none btn btn-primary" to="/login">Login</Link>
                </li>
            }
            {/* <p>Howdy, {user?.displayName}!</p> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;