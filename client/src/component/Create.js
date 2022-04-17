import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   title: "",
   author: "",
   isbn: "",
   rating: ""
 });

 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newBook = { ...form };
 
   await fetch("http://localhost:5000/books/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newBook),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
   console.log(newBook);
   setForm({ title: "", author: "", isbn: "", rating: ""});
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Add Book to Library</h3>
     <form onSubmit={onSubmit}>
     <br />
       <div className="form-group">
         <label htmlFor="title">Title</label>
         <input
           type="text"
           className="form-control"
           id="title"
           value={form.title}
           onChange={(e) => updateForm({ title: e.target.value })}
         /> 
       </div>
       <div className="form-group">
         <label htmlFor="author">Author</label>
         <input
           type="text"
           className="form-control"
           id="author"
           value={form.author}
           onChange={(e) => updateForm({ author: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="isbn">ISBN</label>
         <input
           type="text"
           className="form-control"
           id="isbn"
           value={form.isbn}
           onChange={(e) => updateForm({ isbn: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="rating">F&P Rating</label>
         <input
           type="text"
           className="form-control"
           id="rating"
           value={form.rating}
           onChange={(e) => updateForm({ rating: e.target.value })}
         />
       </div>
       <br />
       <div className="form-group">
         <input
           type="submit"
           value="Add Book"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}