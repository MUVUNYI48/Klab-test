import { NewsLetter } from "../../models/aboutDB.js";

export const getOneById = async (req, res) => {

  let data = await NewsLetter.findById(req.params.id);
  if (data) {

    res.status(200).json(data);
  }else{
    res.json({message:"data not found"});
  }

};