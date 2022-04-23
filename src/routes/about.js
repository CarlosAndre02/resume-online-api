const { Router } = require('express');

const router = Router();

const aboutController = require('../controllers/about');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

router.get('/resumes/:username/abouts', aboutController.show);
router.put('/resumes/:username/abouts', ensureAuthenticated, aboutController.update);

module.exports = router;
