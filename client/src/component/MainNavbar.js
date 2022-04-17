import React from "react";
import Navbar, { NavbarBrand } from 'react-bootstrap';
import Create from './Create';
import Admin from './Admin'
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function MainNavbar() {
 return (
   <div className = "container-fluid" >
     <nav className="navbar navbar-expand-lg navbar-light .bg-primary">
        <a className = "navbar-left" href = "http://www.thegreenhousecenter.org">
          <img src={require('./imgs/Greenhouselogo.png')} />
        </a>
        <NavLink to="/" className ="btn btn-outline-success btn-lg navbar-left">Home
          </NavLink>
          <NavLink to="/admin" className ="btn btn-outline-success btn-lg">Admin
          </NavLink>
    </nav>
    </div>
 );
}
