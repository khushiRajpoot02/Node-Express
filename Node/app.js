// GET POST PUT DELETE methods understanding
const express = require('express')
const app = express();
let {people} = require('./data')
// GET method
app.use(express.static('./methods-public'))
app.get('/api/people', (req, res)=>{
    res.status(200).send({success : true , data : people})
})
// POST method using HTML form
// using middleware for showing form entered data
app.use(express.urlencoded({extended : false}));

app.post('/login', (req, res)=>{
    const {name} = req.body
    if(name){
        res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please use credntials');
})
app.listen(5000, ()=>{
    console.log("Server is listing on port 5000");
})

