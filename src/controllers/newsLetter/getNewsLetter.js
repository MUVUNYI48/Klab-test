// cconst database=require('../../utils/myDatabase.js');
import {newsLetter} from '../../models/aboutDB.js'

export const getAllLetters = async (req, res) => {
  let data = await newsLetter.find()
  res.json(data);
}

