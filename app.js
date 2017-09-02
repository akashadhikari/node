var express = require('express'),
  app = express(),
  path = require('path')

// set the views. __dirname is the root folder and appending views folder
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

// call routes.js module
require('./routes/routes.js')(express,app);


app.listen(3000, function(){
  console.log('Working on port 3000');
})
