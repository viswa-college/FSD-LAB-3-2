const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
async function main() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected!..");
        
    }catch(e) {
        console.log("Error in connecting.." + e);
    }

} 
main();

app.get('/' ,(req,res)=> {
    res.send("Hello Server");
});

app.listen(PORT , ()=> {
    console.log("Server started At "+ PORT);
});