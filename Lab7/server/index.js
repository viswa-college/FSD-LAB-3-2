const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
async function main() {
    try {
        await mongoose.connect(MONGO_URI); // config folder
        const adminSchema = new mongoose.Schema({ // models folder
            name: String,
            phone: String,
            dob: Date,
        });
        const Admin = mongoose.model('admin' , adminSchema);
        const res = await Admin.create({ // controllers folder
            name: "Surya Teja",
            phone: "+91 965784523689",
            dob: Date.now()
        });
        console.log(res);
        console.log("Connected!..");
        
    }catch(e) {
        console.log("Error in connecting.." + e);
    }

} 
main();

app.get('/' ,(req,res)=> { // routes folder
    res.send("Hello Server");
});

app.listen(PORT , ()=> {
    console.log("Server started At "+ PORT);
});