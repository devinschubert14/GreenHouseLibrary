import React, { useState } from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.css";


// Here, we display our Navbar
export default function PreviewBook({id}) {
    const [book, retrieveBook] = useState({
        title: "",
        author: "",
        isbn: "",
        rating: "",
      });

      const navigate = useNavigate();
      async function bookFromDb () {
        const response = await fetch(`http://localhost:5000/books/${id}`);
        if (!response.ok) {
          const message = `An error has occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
        
        const retrvBook = await response.json();
        if (!retrvBook) {
          window.alert(`Record with id ${id} not found`);
          navigate("/");
          return;
        }
        else{
            const updBook = {
                title: retrvBook.body.title,
                author: retrvBook.body.author,
                isbn: retrvBook.body.isbn,
                rating: retrvBook.body.rating,
            }
            return updBook;
        }
}
    retrieveBook(bookFromDb());
    return (
      <div className = "container-fluid" >
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>${book.isbn}</p>
          <p>${book.rating}</p>
       </div>
    );
}