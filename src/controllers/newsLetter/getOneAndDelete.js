import { newsLetter } from '../../models/aboutDB.js'

export const getOneAndDelete = async (req, res) => {
    let requestedId = req.params.id;
    console.log('log from outside:',requestedId);


    if (requestedId) {
        console.log('from if when is true:',requestedId);
        let data= await newsLetter.deleteOne({_id:requestedId});
        // newsLetter.deleteOne(requestedId);
        // newsLetter.create(req.body);
        res.json({data});
        console.log('This is the status',data);
    } else {
        res.json({ message: "not found" })
    }
}