const http = require('http');
const server =http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("This is home page");
    }
 else  if(req.url === '/about'){
        res.end("This is about page");
    }
    else{
        res.end(`
        <h1>oops!!</h1>
        <p>Can't see the page you are looking for</p>
        <a href = "/">back to home page</a>
        `)
    }
   
     
})
server.listen(8081);