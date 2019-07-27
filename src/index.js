const express = require ('express');
const morgan = require ('morgan');
const expresshbs = require('express-handlebars');
const path = require ('path');
 const flash =  require('connect-flash');
 const session = require('express-session');
const mysqlstore = require('express-mysql-session');
const {database} = require('./keys');
const passport= require('passport');



// inicializo mi aplicación
const app = express();


//puerto de escucha del aplicativo
app.set('port',process.env.PORT || 1500);

app.set('views', path.join(__dirname,'views'))
app.engine('.hbs', expresshbs({

    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs',
    helpers: require('./lib/handlebars')
}));

app.set('view engine','.hbs');



//middleware

app.use(session({
    secret:'piarsession',
    resave:false,
    saveUninitialized:false,
    store: new mysqlstore(database)
}))
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//variables globales

app.use((req,res,next)=>{
   app.locals.exitoso =  req.flash('exitoso')
next();
});


//routes

app.use(require('./routes/index'));


app.use('/links', require('./routes/links'));


// public

app.use(express.static(path.join(__dirname,'public')));



//starting de server
app.listen(app.get('port'),()=>{

    console.log('server on port ', app.get('port'));

});
