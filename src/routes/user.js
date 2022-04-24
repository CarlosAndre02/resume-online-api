const { Router } = require('express');

const router = Router();

const userController = require('../controllers/user');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

router.get('/users', ensureAuthenticated, userController.index);
router.post('/users', userController.create);
router.get('/users/:id', ensureAuthenticated, userController.show);
router.put('/users/:id', ensureAuthenticated, userController.update);
router.delete('/users/:id', ensureAuthenticated, userController.delete);

module.exports = router;
