// const app = require("../../../server.js");
const database=require('../../utils/myDatabase.js');

function postNews(req, res){
  const newElement=req.body;
  // console.log(req.body);
  database.push(newElement);

  res.json({database});
  // res.status(201).send("post request");
};

module.exports=postNews;
