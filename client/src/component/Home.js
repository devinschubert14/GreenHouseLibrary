import React from "react";
import Create from './Create';
//import DisplayResults from './searchResults';
import Admin from './Admin'
import SearchBar from './SearchBar';
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
// Here, we display our Navbar
export default function Home() {
 return (
	 <div>
     <Create />
		 <SearchBar />
	</div>

 );
}
