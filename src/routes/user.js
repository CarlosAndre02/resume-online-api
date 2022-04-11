const { Router } = require('express');

const router = Router();

const userController = require('../controllers/user');

router.post('/users', userController.create);

module.exports = router;
