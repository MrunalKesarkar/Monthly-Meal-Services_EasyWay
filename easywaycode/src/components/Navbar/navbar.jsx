import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file
import { FaUserAlt } from "react-icons/fa";
import logo from './logo.png';
import React, { useState, useEffect } from 'react';
import { BiSolidCartDownload } from "react-icons/bi";

const Navbar = ({ cartnum }) => { // Correctly destructure the cartnum prop

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for token in session storage
    const token = sessionStorage.getItem('jwt');
    setIsAuthenticated(!!token);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const handleLogout = () => {
    // Clear the token from session storage and update state
    sessionStorage.removeItem('jwt');
    setIsAuthenticated(false);
    console.log('Logged out');
  };

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary' data-bs-theme='dark'>
      <div className='container-fluid'>
        <a className="navbar-brand" href="#">
          <img src={logo} alt='Logo' className='navbar_logo' style={{ width: '50px', height: '50px' }} />
          ᗷᗝᗝᛕᒪƳ.Ꭵᗝ
        </a>

        <div className='collapse navbar-collapse' style={{ marginTop: '5px' }} id='navbarSupportedContent'>
          <ul className='nav navbar-nav d-lg-inline-flex mx-lg-5'>
            <li className='nav-item mx-lg-4'>
              <Link to='/' className='nav-link' aria-current='page'>Home</Link>
            </li>

            <li className='nav-item mx-lg-4'>
              <Link to='/addNewBook' className='nav-link' aria-current='page'>Add Mess</Link>
            </li>

            <li className='nav-item mx-lg-4'>
              <Link to='/aboutus' className='nav-link' aria-current='page'>About Us</Link>
            </li>

            <li className='nav-item mx-lg-4'>
              <Link to='/contactus' className='nav-link' aria-current='page'>Contact Us</Link>
            </li>

            <li className='nav-item mx-lg-4'>
              <form className="form-inline">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Search</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Search" aria-describedby="basic-addon1" />
                </div>
              </form>
            </li>

            <li className='nav-item mx-lg-4'>
              <NavLink className="nav-icon position-relative text-decoration-none" to='/shoppingcart'>
                <BiSolidCartDownload />
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  {cartnum}
                </span>
              </NavLink>
            </li>

            <li className='nav-item mx-lg-4'>
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FaUserAlt />
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                  <li><Link className="dropdown-item" to="/login" onClick={handleLogout}>Logout</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
