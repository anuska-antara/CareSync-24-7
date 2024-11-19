import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/ai-diagnostics">AI Diagnostics</Link></li>
        <li><Link to="/data-management">Data Management</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
