var express = require('express'),
  app = express();


//routes with get method and a function with three parameters

app.route('/').get(function(req, res, next){
    res.send('<h1>Test</h1>');
})

app.listen(3000, function(){
  console.log('Working on port 3000');
})
