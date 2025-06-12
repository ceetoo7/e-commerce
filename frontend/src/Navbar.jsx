import React from "react";
import "./Navbar.css"; // Importing the CSS file for styling
import { Link } from "react-router-dom"; // Importing Link for navigation

export const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <a href="/">Chandan</a>
        </div>
        <ul className="nav-links">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
