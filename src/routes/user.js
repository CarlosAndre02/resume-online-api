const { Router } = require('express');

const router = Router();

const userController = require('../controllers/user');

router.get('/users', userController.index);
router.post('/users', userController.create);
router.get('/users/:id', userController.show);

module.exports = router;
