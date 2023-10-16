// cconst database=require('../../utils/myDatabase.js');
import { NewsLetter } from '../../models/aboutDB.js'

export const getAllLetters = async (req, res) => {
  try {
    let data = await NewsLetter.find()
    res.json(data);
  } catch (error) {
    console.log('Check the error:', error.message)
    res.json({ message: "data not found" });
  }

}

