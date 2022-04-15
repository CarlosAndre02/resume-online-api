const { Router } = require('express');

const router = Router();

const userController = require('../controllers/user');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

router.get('/users', ensureAuthenticated, userController.index);
router.post('/users', userController.create);
router.get('/users/:id', userController.show);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

module.exports = router;
