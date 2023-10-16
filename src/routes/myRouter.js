import express from 'express';
import {changedTime} from '../middleware/change.js';
const myRouter = express.Router();
// import {deleteNewLetter, getAllLetters, patchNewLetter, postNews, updateByPut} from "../controllers/newsLetter"

import { deleteNewLetter } from '../controllers/newsLetter/deleteNewsLetter.js';
import { getAllLetters } from '../controllers/newsLetter/getNewsLetter.js';
import { patchNewLetter } from '../controllers/newsLetter/patchNewLetter.js';
import { postNews } from '../controllers/newsLetter/postNewLetter.js';
import { getOneAndReplace } from '../controllers/newsLetter/getOneAndReplace.js';
import { getOneById } from '../controllers/newsLetter/getOneById.js';
import {getOneAndDelete} from '../controllers/newsLetter/getOneAndDelete.js'
import { deleteMany } from '../controllers/newsLetter/deleteMany.js';
import { signUp } from '../controllers/authentication/signup.js';
import { login } from '../controllers/authentication/login.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { changePassword } from '../controllers/authentication/changePassword.js';

const app = express();

app.use(changedTime);

myRouter.get('/:id', changedTime, getOneById);//get one by using id * 👌
myRouter.get('/', changedTime, getAllLetters);//get all newsLetters * 👌
myRouter.post('/create', postNews);//create new Letter *👍
myRouter.patch('/change/:id', patchNewLetter);//change newsLetter by Id 👌
myRouter.delete('/delete/:id', getOneAndDelete);//delete one * 😂
myRouter.delete('/deleteMany/:title',deleteMany)//deleteMany newletters * 😁
myRouter.put('/update/:id', getOneAndReplace);//find one and then replace with the other value

myRouter.use(verifyToken);  


//FOR SIGNUP

myRouter.post('/login',login);
myRouter.post('/signup',signUp);
myRouter.post("/changepassword",changePassword)

export default myRouter;