const express = require('express');
const cookieParser = require("cookie-parser")
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cookieParser())
const dotenv = require("dotenv")
app.use(express.json());
app.use(cors());
app.use(require("./routes/auth"));
dotenv.config({path:"./.env"});
const PORT = process.env.PORT || 5000 ;
const Connect =async()=>{
    await mongoose.connect(process.env.URI).then(()=>{
        console.log("connected..");
    }).catch((err)=>{
        console.log(err);
    });
}     
Connect();

app.get('/res',(req,res)=>{
    res.cookie("pop","112255");
})

app.listen(PORT,()=>{
    console.log(`app is Listening on port no ${PORT}`);
})

