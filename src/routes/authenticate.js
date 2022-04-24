const { Router } = require('express');

const router = Router();

const authenticateController = require('../controllers/authenticate');

router.post('/authenticate', authenticateController.create);

module.exports = router;
