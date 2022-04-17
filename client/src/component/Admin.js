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
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/books/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const book = await response.json();
     if (!book) {
       window.alert(`Book with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(book);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const accountInfo = {
     user: form.user,
     pass: form.pass,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
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