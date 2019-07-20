const mysql = require('mysql');
const {promisify} = require('util');
const  {database}= require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err,connetion) => {

    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){

            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){

            console.error('DATABSE HAS TO MANY CONNECTIONS');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('DATABSE CONNECTION WAS REFUSED');
        }
    }

    if(connetion) connetion.release(
    console.log('DB is connected')
    );

});
//promisify pool querys
pool.query = promisify(pool.query);

module.exports = pool;
