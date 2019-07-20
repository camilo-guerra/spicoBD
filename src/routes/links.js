const express = require('express');

const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {

    res.render('links/add');

});

router.get('/', async (req, res) => {


    const usuarios = await pool.query('select * from  usuarios');

    res.render('links/list', {usuarios});



});

router.post('/add', async (req, res) => {
    const { idusuarios, full_name } = req.body;
    const newLink = {
        idusuarios,
        full_name
    };
  

    await pool.query('insert into usuarios set ?', [newLink]);
    req.flash('exitoso','usuario creado correctamente');
    res.send('recibido');

});

router.get('/delete/:id', async(req,res)=>{

const {id} = req.params;
await pool.query('delete from usuarios where idusuarios = ?',[id]);

res.redirect('/links');


});

router.get('/editar/:id', async(req,res)=>{

    const {id} = req.params;

   const usuario = await pool.query('select * from usuarios where idusuarios = ?',[id])
    res.render('links/editar',{usaurio:usuario[0]});
});

router.post('/editar/:id', async(req,res)=>{

    const {id} = req.params;
    const { idusuarios, full_name } = req.body;
    const newLink = {
        idusuarios,
        full_name
    };

   await pool.query('update usuarios set = ? where id = ?',[newLink,id]);
   
res.redirect('/links');
    
});

module.exports = router;    