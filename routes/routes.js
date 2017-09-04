// Use Express router
// function(express,app) suggests the use of express and app.js
module.exports = function(express, app) {
  var router = express.Router();

  // use this instance of router to define all routes
  router.get('/', function(req, res, next){
    res.render('index', {title: 'SkyChat'});
  })

  router.get('/chatrooms', function(req, res, next){
    res.render('chatrooms', {title: 'Chatrooms'});
  })

  // create a session variable named favcolor and set the value red
  router.get('/setcolor', function(req, res, next){
    req.session.favColor = "Red";
    res.send('Setting favourite color!');
  })

  router.get('/getcolor', function(req, res, next){
    res.send('Fav color ' + (req.session.favColor===undefined?"Not Found":req.session.favColor));
  })

  // route to be handled by the instance of the router
  app.use('/', router);

}

// mongodb://akash1:akash1@ds125774.mlab.com:25774/skychat
