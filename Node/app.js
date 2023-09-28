// GET POST PUT DELETE methods understanding using POSTMAN
const express = require('express')
const app = express();
// let {people} = require('./data')
// GET method
const people = require('./routes/people')
const login = require('./routes/login')
// app.use('/api/people', people)
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended : false}));
// below middleware is used for sending json data 
app.use(express.json());
app.use('/api/people', people)
app.use('/login', login);
app.listen(5000, ()=>{
    console.log("Server is listing on port 5000");
})

