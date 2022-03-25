const {Router} =require('express');
const controller = require('./controller')
const router=Router();

router.get('/',controller.getForms)
router.get('/:id',controller.getUserForms)

module.exports=router