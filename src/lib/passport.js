const passport = require('passport');

const Strategy = require('passport-local').Strategy;

const pool=  require('../database');


passport.use('local.signup', new Strategy({
 
    usernameField:'idusuarios',
    passwordField:'idusuarios',
    passReqToCallback: true
},async (req,usernameField,passwordField,done)=>{
    const {full_name} = req.body;
const newUser = {
    
    idusuarios : usernameField,
    full_name : 'ejemplo'
    
};

await pool.query('insert into usuarios set ?',[newUser]);
return done(null,newUser);
}));

passport.serializeUser((user,done)=>{
done(null,user.idusuarios);

});

passport.deserializeUser(async(id,done)=>{

const row = await pool.query('select * from usuarios where idusuarios = ?',[id]);
done(null,row[0]);

});