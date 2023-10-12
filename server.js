
import  express from "express";
// import  myRouter from './src/routes'
import  bodyParser from "body-parser";
import{changedTime}   from './src/middleware/change.js';
import 'dotenv/config.js'
import mongoose from 'mongoose';

import myRouter from './src/routes/myRouter.js';

const app = express();
const PORT = 8000;
app.use(bodyParser.json());
// const router=express.Router();
app.use('/myRouter',myRouter);

//import controllers



app.use(changedTime);
app.use('/myRouter', myRouter)
app.listen(PORT, () => {
  console.log(`the server is running on http://localhost:${PORT}`);
});

mongoose.connect(process.env.DB_CONNECTION_DEV).then((res)=>{
console.log('database connected');
})


