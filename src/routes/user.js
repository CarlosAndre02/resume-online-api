const { Router } = require('express');

const router = Router();

const userController = require('../controllers/user');

router.get('/users', userController.index);
router.post('/users', userController.create);
router.get('/users/:id', userController.show);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

module.exports = router;
