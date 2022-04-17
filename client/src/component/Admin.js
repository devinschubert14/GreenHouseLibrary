import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Route, Routes } from "react-router-dom";
import Create from './Create'
export default function Admin() {
 const [form, setForm] = useState({
   user: "",
   pass: "",
 });
 const navigate = useNavigate();
 
 function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
 async function onSubmit(e) {
    const testUser = { ...form };
    const response = await fetch(`http://localhost:5000/admin/`);
    if (!response.ok) {
      const message = `An error has occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const acct = await response.json();
    console.log(test);
    if (!acct) {
      window.alert(`Record with id ${testUser.body.user} not found`);
      navigate("/");
      return;
    }
    else
        {
            console.log("Successully found element");
            <Route path="/create" element={<Create />} />
        }
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Admin Database Connect</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="user">User: </label>
         <input
           type="text"
           className="form-control"
           id="user"
           value={form.user}
           onChange={(e) => updateForm({ user: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="pass">Pass: </label>
         <input
           type="text"
           className="form-control"
           id="pass"
           value={form.pass}
           onChange={(e) => updateForm({ pass: e.target.value })}
         />
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Login"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}