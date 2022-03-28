const {Router} =require('express');
const controller = require('./controller')
const router=Router();

router.get('/',controller.getForms)
router.get('/:id',controller.getUserForms)
router.post('/',controller.addForm)
router.put('/',controller.updateForm)
router.delete('/',controller.deleteForm)
module.exports=router