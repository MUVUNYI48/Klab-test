import { NewsLetter } from '../../models/newsLetterModel.js';

export const getOneAndReplace = async (req, res) => {
  try {
    let filterId = req.params.id;

    // Create a filter object using the document's _id
    const filter = { _id: filterId };

    // Use findOneAndUpdate with the correct filter and request body
    //if you do not providing a valid filter object in your findOneAndUpdate
    //await will not work
    let updateAndReplace = await NewsLetter.findOneAndUpdate(filter, req.body, {
      // new: true, // To return the updated document
    });
    // new: true,  To return the updated document

    if (updateAndReplace) {
      res.status(200).json({
        message: "Document updated successfully",
        data: updateAndReplace
      });
    } else {
      res.status(404).json({
        message: "Document not found"
      });
    }
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({
      message: "An error occurred"
    });
  }
};
