var express = require('express');
var router = express.Router();
var cv = require('../db.json');
var welcomeText = "Welcome Guest!";
/* GET login page. */
router.get('/', function(req, res, next) {
  
 res.render('login',{title :'login', welcome:welcomeText});

});
/* POST to login page. */
router.post('/',function(req, res, next) {
  console.log("POST!!!!");
  // Used validators to validate
  user = req.body.username
  req.checkBody("username", "Enter a valid username.").notEmpty;
  req.checkBody("password","Invalid password").isAlphanumeric;

  var errors = req.validationErrors();
  if (errors) {

     welcomeText = "Invalid details!"
      res.redirect("/login");
    return;
  } else {
    var password = userCredentials.get(user);
    if(password === undefined) {
      welcomeText = "Username/password mismatch"
      res.redirect("/login");
    }
    else {
      // redirecting POST request
      res.redirect(307,"/");
      
    }
    
}
});

module.exports = router;
