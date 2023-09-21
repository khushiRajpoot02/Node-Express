// sending json data as responce
const express = require('express');
const app = express();
const {products} = require('./data')

app.get('/api/products', (req, res)=>{
    console.log('user hit the server');
    const newProducts = products.map((product)=>{
        const {name, id, image, price} = product;
        return {name, id, image, price};
    })
    res.json(newProducts)
});

app.get('/api/products/1', (req, res)=>{
    console.log('user hit the server');
    const newProducts = products.map((product)=>{
        const {name, id, image, price} = product;
        if(id === 1)
        return {name, id, image, price};
      else return {message : "not found"};
    })
    res.json(newProducts)
});

app.listen(5000, ()=>{
    console.log('server is runnig');
})