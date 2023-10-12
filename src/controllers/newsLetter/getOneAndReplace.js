// const app = require("../../../server.js");
import express from 'express';
const app = express.Router()
// const database=require('../../utils/myDatabase.js');
import bodyParser from "body-parser";
import { newsLetter } from '../../models/aboutDB.js';
app.use(bodyParser.json());


export const getOneAndReplace = ((req, res) => {
  let requesteId = req.params.id;

  if (requesteId) {
    let data = newsLetter.find(requesteId)
    let newData = req.body;
    newsLetter.updateOne({ body: data }, { body: newData })
    let change = {
      data,
      newData
    }

    res.json(change)
  } else {
    res.json({ message: "Not expected" })
  }

});





