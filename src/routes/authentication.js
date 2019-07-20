const express = require ('express');
const passport = require('passport');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('auth/signup');
  });

router.post ('/signup',(req,res)=>{

passport.authenticate('local.singup',{
    successRedirect:'/profile',
    failureRedirect: '/signup',
    failureFlash:true
});

  
    });


    router.get('/profile',(req,res)=>{
res.send('bien');


    });
module.exports = router;

