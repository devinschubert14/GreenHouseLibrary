const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/books").get(function (req, res) {
  let db_connect = dbo.getDb("books");
  db_connect
    .collection("books")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/books/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("books")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});
//This section will help get a single record by id
recordRoutes.route("/books/").get(function (req, res){
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("records")
        .findOne(myquery, function(err, result){
            if(err) throw err;
            res.json(result);
        });
});
// This section will help you create a new record.
recordRoutes.route("/books/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    title: req.body.title,
    position: req.body.author,
    isbn: req.body.isbn,
    rating: req.body.rating,
  };
  db_connect.collection("books").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
  console.log(myobj)
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();  
  let myquery = { _id: ObjectId( req.params.id )};  
  let newvalues = {    
    $set: {      
      title: req.body.title,     
      authior: req.body.author,      
      isbn: req.body.isbn,  
      rating: req.body.rating,  
    }, 
    }
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("books").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 book deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;