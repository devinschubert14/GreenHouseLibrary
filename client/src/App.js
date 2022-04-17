import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./component/Navbar";
import Create from "./component/Create";
import Admin from "./component/Admin"
import Home from "./component/Home";
import DisplayResults from "./component/searchResults";
const App = () => {
 return (
   <div>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/create" element={<Create />} />
       <Route path="/admin" element={<Admin />} />
			 <Route path="/search-results" element = {<DisplayResults />} />
     </Routes>
   </div>
 );
};

export default App;
