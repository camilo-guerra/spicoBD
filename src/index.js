const express = require ('express');
const morgan = require ('morgan');
const expresshbs = require('express-handlebars');
const path = require ('path');
 
const {database} = require('./keys');




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

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//variables globales


//routes

app.use(require('./routes/index'));


app.use('/links', require('./routes/links'));


// public

app.use(express.static(path.join(__dirname,'public')));



//starting de server
app.listen(app.get('port'),()=>{

    console.log('server on port ', app.get('port'));

});
