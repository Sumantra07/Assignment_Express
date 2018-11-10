       //PLEASE Read the Readme.txt before you run the application //
      var express = require('express');
      var router = express.Router();
      var cv = require('../db.json');

      var signeduptext = "Lets get you started!!"
    
      /* GET  sign page. */
      router.get('/', function(req, res, next) {
        
        res.render('register',{title :'Sign-up',registration: signeduptext});

      });
      /* POST to sign up page */
      router.post('/',function(req, res, next) {
        console.log("POST!!!!");
        // used validator to validate content 
        req.checkBody("firstname", "Enter a valid firstname.").notEmpty();
        req.checkBody("lastname", "Enter a valid lastname.").notEmpty();
        req.checkBody("email", "Enter a valid email address.").isEmail();
        req.checkBody("password","Enter Alphanumberic password").isAlphanumeric();
        req.checkBody(  
        "password", 
        "Passwords donot match").matches(confirmpassword);

        var errors = req.validationErrors();
        if (errors) {
          signeduptext = "Well seems like you did not fill the details correctly!!"
          res.render('register',{title :'Sign-up',registration: signeduptext});
        } else {
        // get values from POST request
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var email = req.body.email;
        var password = req.body.password;
        var confirmpassword = req.body.confirmpassword;
        var username = firstname;
        signeduptext = firstname + " ,you are now registered, try login!"
        // saving it in the global map - only relevant details
        userCredentials.set(firstname,password);
        res.redirect('/register');
          
        }
      
      });
      module.exports = router;
