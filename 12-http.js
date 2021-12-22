
const http = require('http');
const { json } = require('stream/consumers');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Opps! </h1>
    <p>Now you need to go back</P>
    <a href="/">Back to home </a>
    `)
})

server.listen(5000);


// npm init -y  is for package json