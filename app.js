var http = require('http'), // use this to import node's http module
    host = '127.0.0.1',
    port = '9000';

//createServer lets us instantiate a server in node js
//req and res are the request and response
var server = http.createServer(function(req, res){

    // writeHead method sets the header of the content that we are about to server
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('<h1>Hello World!</h1>');
}).listen(port, host, function(){
  console.log('Server Running on http://' + host + ':' + port);

})

// listen to request
