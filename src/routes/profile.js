const { Router } = require('express');

const router = Router();

const profileController = require('../controllers/profile');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

router.get('/resumes/:username/profiles', profileController.show);
router.put('/resumes/:username/profiles', ensureAuthenticated, profileController.update);

module.exports = router;
