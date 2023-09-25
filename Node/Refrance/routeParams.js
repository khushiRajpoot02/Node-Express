// sending json data as responce
// Route Parameters
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

// app.get('/api/products/1', (req, res)=>{
//     console.log('user hit the server');
// //    const {param} =  req.params;
// //    console.log(param);
//     const singleProduct = products.find((product)=>product.id === 1)
//     res.json(singleProduct)
// });
app.get('/api/products/:productId', (req, res)=>{
    console.log('user hit the server');
//    const {param} =  req.params;
//    console.log(req.params);
const {productId} = req.params;
    const singleProduct = products.find((product)=>product.id === Number(productId))
    if(!singleProduct){
        return res.status(404).send("page not found");
    }
   else return res.json(singleProduct)
});

app.get('/api/products/:productId/reviews/:reviewId', (req, res)=>{
    console.log('user hit the server');
//    const {param} =  req.params;
//    console.log(req.params);
const {productId} = req.params;
    const singleProduct = products.find((product)=>product.id === Number(productId))
    res.json("Hello World")
});

app.listen(5000, ()=>{
    console.log('server is runnig');
})