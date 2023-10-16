import { NewsLetter } from "../../models/newsLetterModel.js";
export const patchNewLetter =async (req, res) => {
  try {
    let requestedId = req.params.id;
    let updateById= await NewsLetter.findByIdAndUpdate(requestedId, req.body)
    if (updateById) {
     
      res.status(200).json({ message: 'there is some change ' })
    }
  } catch (error) {
    console.log('log from patch', error)
    
  }

};

