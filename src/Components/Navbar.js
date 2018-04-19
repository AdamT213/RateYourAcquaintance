import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink className="link"
      to="/"
      exact
    >Home</NavLink>
    </div>
  );
};

export default NavBar;