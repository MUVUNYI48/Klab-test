// const app = require("../../../server.js");
// const database=require('../../utils/myDatabase.js');
import { NewsLetter } from '../../models/aboutDB.js'



export const postNews = (req, res) => {
  NewsLetter.create(req.body)
  // console.log(req.body);
  let newData = req.body;
  try {
    if (newData) {
      let status = {
        message: "newLetter created check below",
        newData
      }
      // res.status(201).send("post request");
      res.status(201).json({status});
    }
  }catch(error){
    console.error(error.message);
    
  res.status(501).send("post request not implemented");
  }


};

