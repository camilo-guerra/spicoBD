const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{

    res.render('links/front');

});
module.exports = router;
