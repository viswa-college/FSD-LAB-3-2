const express = require('express');
const fs = require('fs');
const app = express();
const users = require('./users.json');

const cors = require('cors');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));

app.get('/' , (req,res)=> {
    res.send("Welcome to CVR Server...");
});

app.post('/register' , (req,res) => {
    console.log(req.body);
    const user = {
        id: users.length+1,
        ...req.body
    };

    users.push(user);
    try {
        fs.writeFile('./users.json' , JSON.stringify(users) , (err)=> {
            if(err) {
                res.send("Error in Adding Data...");
            }else {
                res.render('index' , {users : users});
            }
        });
    }catch (e) {
        console.log(e);
        res.send("Network Error...");
    }


})

app.listen(3000 , ()=> {
    console.log("Server is started at http://localhost:3000");
})