import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'; 
import {removePerson} from './actions/personActions' 

const handleHomeNav = event => { 
  event.preventDefault(); 
  this.props.removePerson(); 
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink className="link"
      to="/"
      exact 
      onclick= {this.handleHomeNav}
    >Home</NavLink> 
    </div>
  );
};

export default connect(null, { removePerson })(NavBar);