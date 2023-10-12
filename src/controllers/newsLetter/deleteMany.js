import { newsLetter } from '../../models/aboutDB.js'

export const deleteMany = async (req, res) => {
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

    try{
        const data=await newsLetter.deleteMany({title:requestAnimationFrame.params.title});
        if(data.deletedCount===0){
            return res.status(404).json({message:"no matching documents found for deletion"})
        }
        res.status(200).json({message:"deleteddd     ....",deletedCount:data.deletedCount})
    }catch(error){
console.error(error.message);
res.status(500).json({message:"internal error ",error:error.message})
    }
}