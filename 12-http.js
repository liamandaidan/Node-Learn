//create first website type: localhost:5000/
const http = require('http');

//req = income request think get
//res = what we sending back, think post
const server = http.createServer((req, res) => {
    //console.log(req);
    if (req.url === '/') {
        res.end('Welcome to our Home Page!');
    }
    if (req.url === '/about') {
        res.end('Welcome to about page!')
    }
    res.end(`
    <h1>0oops!</h1>
    <p>We can't find the page you are looking for!</p>
    <a href="/">Back Home</a>
    `)


})

server.listen(5000);