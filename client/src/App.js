import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./component/Navbar";
import Create from "./component/Create";
import Admin from "./component/Admin"
import Home from "./component/Home";
const App = () => {
 return (
   <div>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/create" element={<Create />} />
       <Route path="/admin" element={<Admin />} />
     </Routes>
   </div>
 );
};
 
export default App;