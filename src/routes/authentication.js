const express = require ('express');
const passport = require('passport');
const router = express.Router();

router.get('/signup', (req, res) => {
    console.log('before');
    res.render('auth/signup');
  });

router.post ('/signup',(req,res)=>{
    console.log('signup');
passport.authenticate('local.signup',{

    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash:true
});

  
    });


    router.get('/profile',(req,res)=>{
        console.log('profiel');
        res.send('bien');


    });
module.exports = router;

