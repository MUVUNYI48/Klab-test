// import { newsLetter } from '../../models/aboutDB.js'

// export const deleteMany = async (req, res) => {
// let requestedId = req.params.id;
// console.log('log from outside:',requestedId);


// if (requestedId) {
//     try{
//        console.log('from if when is true:',requestedId);
//     newsLetter.deleteMany(requestedId);
//     // newsLetter.deleteOne(requestedId);
//     // newsLetter.create(req.body);
//     console.log('there is change on letters');  
//     }catch(error){
//         console.error(error)}

// } else {
//     res.json({ message: "shakira ahandi hano wapi" })
// }
////////////////////////////////////////////////////////////////////////////////////
// try {
//     const data = await newsLetter.deleteMany({ title: req.params.title });
//     if (data.deletedCount === 0) {
//         return res.status(404).json({ message: "no matching documents found for deletion" })
//     }
//     res.status(200).json({ message: "deleted doc ", deletedCount: data.deletedCount })
// } catch (error) {
//     // console.error(error.message);
//     res.status(500).json({ message: "internal error ", error: error.message })
// }

///////////////////////////////////////////////////////////

// try {
//     const data = await newsLetter.deleteMany({ title: req.params.title });
//     if (data.deletedCount === 0) {
//         return res.status(404).json({ message: "no matching documents found for deletion" });
//     }
//     res.status(200).json({ message: "deleted doc ", deletedCount: data.deletedCount });
// } catch (error) {
//     // Handle any potential errors, e.g., database errors
//     res.status(500).json({ message: "internal error", error: error.message });
// }


// }


// 
import { NewsLetter } from '../../models/aboutDB.js';

export const deleteMany = async (req, res) => {
    try {
        // Retrieve the title parameter from the request
        // const { title } = req.params.title;

        // Use the `deleteMany` method to delete documents matching the provided title
        const result = await NewsLetter.deleteMany({ title: req.params.title }
        );

        // Check if any documents were deleted
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "No matching documents found for deletion" });
        }

        // Documents were deleted successfully
        res.status(200).json({ message: "Deleted documents", deletedCount: result.deletedCount });
    } catch (error) {
        // Handle any potential errors, e.g., database errors
        console.error(error);
        res.status(500).json({ message: "Internal error", error: error.message });
    }
};
