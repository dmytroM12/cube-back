const {Router} =require('express');
const controller = require('./controller')
const router=Router();

router.get('/', controller.getUsers);
router.get('/:email',controller.getUserByEmail)
router.post('/',controller.addUser)
router.delete('/:email',controller.deleteUser)
module.exports=router;