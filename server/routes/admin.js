const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a single record by id
recordRoutes.route("/admin/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("admin")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});
//This section will help get a single record by id
recordRoutes.route("/admin").get(function (req, res){
  let db_connect = dbo.getDb();
  let findUser = { 
    user: req.body.user,
  };
  console.log(findUser);
  db_connect
      .collection("admin")
      .find(findUser, function(err, result){
          if(err) throw err;
          res.json(result);
      });
});
// This section will help you create a new record.
recordRoutes.route("/admin/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    user: req.body.user,
    pass: req.body.pass,
  };
  db_connect.collection("admin").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();  
  let myquery = { _id: ObjectId( req.params.id )};  
  let newvalues = {    
    $set: {      
      user: req.body.user,     
      pass: req.body.pass,       
    }, 
    }
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("admin").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 book deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;