// Express middleware functions
const express = require('express')
const authorize = require('./authMiddleWare')
const logger = require('./middleWare')
const app = express();
// req => middleware = > res
// const logger = (req, res, next)=>{
//     const method = req.method;
//     const url = req.url;
//     const year = new Date().getFullYear();
//     console.log(method, url, year);
//     res.send('Testing');
//     next();
// }
// instead of using logger inside every app.get method, we can use app.use() function to implement the middleware functionality
app.use([logger,authorize])
// or we can explicitly give path to the app.use(',/api') here after every ./api middleware will be applied 
app.get('/' , (req, res)=>{
   console.log('user hit the server') 
   res.send('Home');                     
})
app.get('/About' , (req, res)=>{
    // console.log('user hit the server') 
   
    res.send('About');  
    console.log(req.user);                   
 })
app.listen(5000, ()=>{
    console.log("Server is listing on port 5000");
})

