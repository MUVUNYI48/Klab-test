
const express = require("express");
const router=require('./src/routes/detete.js')
const bodyParser = require("body-parser");
const changedTime=require('./src/middleware/change.js');

const app = express();
const PORT = 8000;
app.use(bodyParser.json());
// const router=express.Router();
app.use('/detete',router);

//import controllers



app.use(changedTime);
app.use('/detete', router)
app.listen(PORT, () => {
  console.log(`the server is running on http://localhost:${PORT}`);
});


