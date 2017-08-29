var http = require('http'), // use this to import node's http module
    fs = require('fs'), // file system module
    path = require('path'), // path module
    host = '127.0.0.1',
    port = '9000';

// content types
    var mimes = {
      ".html" : "text/html",
      ".css" : "text/css",
      ".js" : "text/javascript",
      ".gif" : "image/gif",
      ".jpg" : "image/jpeg",
      ".png" : "image/png"
    }

//createServer lets us instantiate a server in node js
//req and res are the request and response
var server = http.createServer(function(req, res){

  // forward slash opens index.html else it should be the specific name
  var filepath = (req.url === '/') ? ('./index.html') : ('.' + req.url);
// extract the file extension and get the matching contentType value
  var contentType = mimes[path.extname(filepath)];
  //check to see if the file exists
  fs.exists(filepath, function(file_exists){
    if(file_exists){

      //read and serve
      // readFile asynchronously reads the file and when done, it fires the callback function
      fs.readFile(filepath, function(error, content) {
        if(error) {
          res.writeHead(500);
          res.end();
        } else {
          res.writeHead(200, {'Content-Type' : contentType});
          res.end(content, 'utf-8');
        }
      })

    } else {
      res.writeHead(404);
      res.end("Sorry, we couldnt find the file");
    }
  })

}).listen(port, host, function(){
  // listen to request
  console.log('Server Running on http://' + host + ':' + port);

})
