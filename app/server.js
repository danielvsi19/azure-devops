'use strict';

const express = require('express');
const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({ name: String});
// Constants
 const PORT = 8080;
 const HOST = '0.0.0.0';

 // App
 const app = express();
 app.get('/', (req, res) => {
   res.send('Hello Everyone!');
   });

app.get('/home', (req, res) => {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://192.168.42.11:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  var myobj = { name: "Tom"};
  dbo.collection("people").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
});

   app.listen(PORT, HOST);
   console.log(`Running on http://${HOST}:${PORT}`);
