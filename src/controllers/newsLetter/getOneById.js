import { newsLetter } from "../../models/aboutDB.js";

export const getOneById = async (req, res) => {
  let data = await newsLetter.findById(req.params.id);

  res.status(200).json(data);
};