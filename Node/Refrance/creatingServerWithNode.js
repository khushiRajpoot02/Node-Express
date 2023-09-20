
const http = require('http');
const server = http.createServer((req, res)=>{
    const url = http.url;
    // home page
    if(req.url === '/'){
         res.writeHead(200, {'content-type' : 'text/html'});
         res.write('<h1>Home page</h1>');
         res.end();
    }
else if(req.url === '/about'){
    res.writeHead(200, {'content-type' : 'text/html'})
    res.write('<h1>This is about page </h1>')
    res.end()
}
else{
    res.writeHead(404, {'content-type':'text/html'})
    res.write('<h1>Page not found</h1>')
    res.end()
}
    //   console.log("User hit the server");
    //   console.log(url);
    //   res.end("Home page");
})
server.listen(5000);