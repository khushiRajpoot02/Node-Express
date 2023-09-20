const express = require('express');
const app = express();
const path = require('path');
// path for sending path to the current file/diractory

// let's use => app.use middleware for using static asset, 
// static is a file which server do not change it 
// inside static we create public folder, keep all static file inside public folder

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res)=>{
//      res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// after commenting these line of code, we are dumping all the file into static asset
// 2nd way would be Server Side Rendering
// for server side rendering we use template engine 
// })

app.get('*', (req, res)=>{
    res.status(404).send('page not found');
})

app.listen(5000, ()=>{
    console.log("server is running");
})