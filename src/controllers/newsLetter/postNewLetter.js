// const app = require("../../../server.js");
// const database=require('../../utils/myDatabase.js');
import {newsLetter} from '../../models/aboutDB.js'



export const postNews=(req, res)=> {
  newsLetter.create(req.body)
  // console.log(req.body);
let newData=req.body;
let status={
  message:"newLetter created check below",
  newData
}
  res.json({ status });
  // res.status(201).send("post request");
};

