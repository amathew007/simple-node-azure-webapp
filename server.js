var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('if you are a startup and you want to do awesome stuff , reach the evangelist team\n');
}).listen(port);
console.log("running on port " + port);
