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


const app = express();

app.use(changedTime);

myRouter.get('/', changedTime, getAllLetters);
myRouter.get('/:id', changedTime, getOneById);
myRouter.post('/create', postNews);
myRouter.patch('/patched/:id', patchNewLetter);
myRouter.delete('/delete/:id', getOneAndDelete);
myRouter.delete('deleteMany',deleteMany)
myRouter.put('/update/:id', getOneAndReplace);

//FOR SIGNUP

myRouter.post('/login',login);
myRouter.post('/signup',signUp);

export default myRouter;