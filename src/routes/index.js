const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{

    res.send('Funciona mijo');

});
module.exports = router;
