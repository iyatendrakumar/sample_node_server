// import http from 'http';
let http = require("http");
let fs = require("fs");
console.log("starting server");
http
    .createServer((req, res) => {
        fs.readFile('response.html', (err, data) => {
            console.log(req.url);
            if(!err){
                res.writeHead(200, {
                    "Content-type" : "text/html",
                });
                res.write(data);
            } else res.write("error while reading file");
            return res.end();
        });
    })
    .listen(8080);