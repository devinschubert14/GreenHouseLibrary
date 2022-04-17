import React from "react";

import Create from './Create';
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
 return (
   <div >
     <nav className="navbar navbar-expand-lg navbar-light .bg-primary">
        <a href = "http://www.thegreenhousecenter.org">
          <img className = "navbar-brand" src={require('./Greenhouselogo.png')}/>
        </a>
          <p class = "home-icon">
            <button type="button" class="btn btn-outline-success btn-lg" data-bs-toggle="button" autocomplete="off">Home</button>
          </p>
          <p class = "admin-icon">
            <button type="button" class="btn btn-outline-success btn-lg" data-bs-toggle="button" autocomplete="off">Admin</button>
          </p>
   <div>
       <nav>
           <Create/>
     </nav>
   </div>
 );
}
