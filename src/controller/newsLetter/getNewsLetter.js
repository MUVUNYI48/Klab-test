const app = require("../../../server.js");
const database=require('../../utils/myDatabase.js');


function getAllLetters(req,res){
  res.json(database);
}

module.exports=getAllLetters;
