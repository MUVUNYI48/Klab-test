// const app = require("../../../server.js");
const express=require('express');
const app=express.Router()
const database=require('../../utils/myDatabase.js');
const bodyParser = require("body-parser");
app.use(bodyParser.json());


const updateByPut=((req, res) => {
    let requesteId = parseInt(req.params.id);
    let data = database.find((item) => {
      return item.id == requesteId;
    });
    console.log(data);
     database.push(req.body);
     console.log(database);
     res.json({database});

     const status={
      data,
      message:"news HAVE CREATED"
     }
    //  console.log('req :',req.time);
    res.json({status});
   
  });

  module.exports = updateByPut;


