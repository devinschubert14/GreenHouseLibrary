import React from "react";
import Create from './Create';
import Admin from './Admin'
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
       <nav>
           <Admin/>
     </nav>
   </div>
 );
}
