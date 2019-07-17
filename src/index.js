const express = require ('express');
const morgan = require ('morgan');

const app = express();


app.set('port',process.env.PORT || 1500);


app.use(morgan('dev'));


//variables globales

//routes

app.use(require('./routes'));

// public


//starting de server
app.listen(app.get('port'),()=>{

    console.log('server on port ', app.get('port'));

});
