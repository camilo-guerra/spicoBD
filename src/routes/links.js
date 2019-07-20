const express = require ('express');

const router = express.Router();

const pool = require('../database');

router.get('/add',(req,res)=>{

res.render('links/add');

});

router.post('/add',async (req,res)=>{
    const{titulo,url,descripcion} = req.body;
    const newLink = {
titulo,
url,
descripcion
    };
console.log(newLink);

await pool.query('insert into usuarios set ?', [newLink]);
    res.send('recibido');



});

module.exports = router;    