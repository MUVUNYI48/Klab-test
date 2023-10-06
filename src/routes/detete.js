const express=require('express');
const router=express.Router();
const app=express();
const changedTime=require('../middleware/change.js');
app.use(changedTime);

const deleteNewsLetter=require('../controller/newsLetter/deleteNewsLetter')
const getNewLetter=require('../controller/newsLetter/getNewsLetter.js')
const patchNewLetter=require('../controller/newsLetter/patchNewLetter.js');
const postNews=require('../controller/newsLetter/postNewLetter.js');
const updateByPut=require('../controller/newsLetter/udpateNewLetter.js');

router.get('/',changedTime,getNewLetter);
router.post('/create/:id',postNews);
router.patch('/patched/:id',patchNewLetter);
router.delete('/delete/:id',deleteNewsLetter);
router.put('/update/:id',updateByPut);


module.exports=router;