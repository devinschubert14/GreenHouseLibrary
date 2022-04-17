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
   <div className = "text-center mt-4 mb-4 px-5">
     <nav className="navbar navbar-expand-lg .navbar-light .bg-primary" >
       <div class="nav justify-content-left px-5">
        <a href = "http://www.thegreenhousecenter.org">
          <img className = "navbar-brand" src={require('./imgs/Greenhouselogo.png')}/>
        </a>
        </div>
        <div  class="nav justify-content-right">
        <div className = "text-center mt-4 mb-4 px-5">
        <NavLink to="/" className ="btn btn-outline-success btn-lg">Home
          </NavLink>
        </div>
        <div className = "text-center mt-4 mb-4 px-5">
        <NavLink to="/admin" className ="btn btn-outline-success btn-lg">Admin
        </NavLink>
        </div>
        </div>
    </nav>
    </div>
 );
}







