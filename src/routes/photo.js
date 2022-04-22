const { Router } = require('express');

const router = Router();

const photoController = require('../controllers/photo');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

router.post('/upload', ensureAuthenticated, photoController.create);
router.get('/upload/:id', photoController.show);
router.delete('/upload/:id', ensureAuthenticated, photoController.delete);

module.exports = router;
