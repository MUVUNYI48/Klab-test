import { NewsLetter } from '../../models/aboutDB.js'

export const getOneAndDelete = async (req, res) => {
    let requestedId = req.params.id;
    console.log('log from outside:', requestedId);
    let data = await NewsLetter.deleteOne({ _id: requestedId });

    try {


        if (data.deletedCount === 0) {
            res.json({ message: "data have been already deleted" })
        } else if (requestedId) {
            console.log('from if when is true:', requestedId);

            // NewsLetter.deleteOne(requestedId);
            // NewsLetter.create(req.body);

            res.json({ data });

            console.log('This is the status', data);
        }
        else {
            res.json({ message: "not found" })

        }

    }catch (error) {
    console.error('error :', error.message),
        res.status(500).json({ message: "internal server error" })
}

}
