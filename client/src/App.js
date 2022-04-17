import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import MainNavbar from "./component/MainNavbar";
import Create from "./component/Create";
import Admin from "./component/Admin"
import Home from "./component/Home";
import PreviewBook from "./component/PreviewBook";
const App = () => {
 return (
   <div>
     <MainNavbar/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/create" element={<Create />} />
       <Route path="/admin" element={<Admin />} />
			 <Route path="/previewBook" element = {<PreviewBook id={'625baa24169d11052cfeca3c'} />} />
     </Routes>
   </div>
 );
};

export default App;
