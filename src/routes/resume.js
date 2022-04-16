const { Router } = require('express');

const router = Router();

const resumeController = require('../controllers/resume');

router.get('/resumes/:username', resumeController.show);

module.exports = router;
