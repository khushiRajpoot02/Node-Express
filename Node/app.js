// Query parameters or url parameters
const express = require('express')
const app = express();
const {products} = require('./data')
app.get('/api/v1/query', (req, res)=>{
    console.log('User hit the server');
    const {search, limit} = req.query;
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
        return product.name.startsWith(search) })
        // used filter instead of find method because, filter method returns an array of the filtered values
    }
   if(limit){
    sortedProducts = sortedProducts.slice(0, Number(limit));
    // slice method only works on array 
   }
   res.status(200).json(sortedProducts);
//    res.send("Hello world");
    //  console.log(req.query);
    //  res.send("Hello world");   
})
app.listen(5000, ()=>{
    console.log("Server is listing on port 5000");
})

