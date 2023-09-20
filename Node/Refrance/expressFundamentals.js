const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    console.log('user hit the server');
    res.send("Home Page");
})

app.get('/about', (req, res)=>{
    console.log('user hit the server');
    res.send("About page");
})

app.get('*', (req, res)=>{
    console.log('user hit the server');
    res.status(404).send("Page not found");
})

app.listen(5000, ()=>{
    console.log("server is running");
})