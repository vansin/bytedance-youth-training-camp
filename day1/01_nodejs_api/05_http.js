const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index.html');

http.createServer(function (req, res) {

    const {url, method, header} = req


    res.writeHead(200, {'Content-Type': 'html'});
    res.end(index);

}).listen(3000);