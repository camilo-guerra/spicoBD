const express = require('express');

const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {

    res.render('links/add');

});

router.get('/', async (req, res) => {


    const usuarios = await pool.query('select * from  usuarios');

    res.render('links/list', { usuarios });



});

router.post('/add', async (req, res) => {
    const { idusuarios, full_name } = req.body;
    const newLink = {
        idusuarios,
        full_name
    };
    console.log(newLink);

    await pool.query('insert into usuarios set ?', [newLink]);
    res.send('recibido');



});



module.exports = router;    