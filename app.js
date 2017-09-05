var express = require('express'),
  app = express(),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  config = require('./config/config.js'),
  ConnectMongo = require('connect-mongo')(session)

// set the views. __dirname is the root folder and appending views folder
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser()); // session management

//development mode
var env = process.env.NODE_ENV || 'development';
if(env === 'development') {
  // dev specific settings
  app.use(session({secret:config.sessionSecret}))
} else {
  // production specific
  app.use(session({
    secret:config.sessionSecret,
    store:new ConnectMongo({
      url:config.dbURL,
      stringify:true
    })
  }))
}

// call routes.js module
require('./routes/routes.js')(express,app);


app.listen(3000, function(){
  console.log('SkyChat working on port 3000');
  console.log('Node: ' +env);
})
