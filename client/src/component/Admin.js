import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Admin() {
 const [form, setForm] = useState({
   title: "",
   author: "",
   isbn: "",
   rating: "",
 });
 const params = useParams();
 const navigate = useNavigate();
 
 function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
 async function onSubmit(e) {
    const id = params.id.toString();
    const response = await fetch(`http://localhost:5000/server/admin/${params.id.toString()}`);

    if (!response.ok) {
      const message = `An error has occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const acct = await response.json();
    if (!acct) {
      window.alert(`Record with id ${id} not found`);
      navigate("/");
      return;
    }
    console.log(acct)
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Book Database Connect</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="user">User: </label>
         <input
           type="text"
           className="form-control"
           id="user"
           value={form.user}
           onChange={(e) => updateForm({ title: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="user">Pass: </label>
         <input
           type="text"
           className="form-control"
           id="user"
           value={form.pass}
           onChange={(e) => updateForm({ title: e.target.value })}
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