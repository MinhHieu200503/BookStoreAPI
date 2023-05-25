const express = require("express");
const app = express();
const port = 3000
const routes = require("./routes/routes.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
require("dotenv").config(); //=> config file env

mongoose.connect(process.env.URL_MONGODB)
.then(()=>{
    console.log("Connected mongoDB")
}).catch((err)=>{
    console.log("Connected mongoDB "+err)

})

routes(app);

app.listen(port,()=>{
    console.log("http://localhost:3000")
})