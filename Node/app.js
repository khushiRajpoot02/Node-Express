// Express middleware functions (Inbult)
// npm i morgan
const express = require('express')
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny')) // morgan('tiny')=>means for all route 
app.get('/', (req, res)=>{
    res.send('Home page')
})

app.get('/About', (req, res)=>{
    res.send('About page');
})

app.get('/api/product', (req, res)=>{
    res.send('Product');
})


app.listen(5000, ()=>{
    console.log("Server is listing on port 5000");
})

