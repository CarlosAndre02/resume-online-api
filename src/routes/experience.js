const { Router } = require('express');

const router = Router();

const experienceController = require('../controllers/experience');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

router.get('/resumes/:username/experiences', ensureAuthenticated, experienceController.index);
router.post('/resumes/:username/experiences', ensureAuthenticated, experienceController.create);
router.get('/resumes/:username/experiences/:id', experienceController.show);
router.put('/resumes/:username/experiences/:id', ensureAuthenticated, experienceController.update);
router.delete('/resumes/:username/experiences/:id', ensureAuthenticated, experienceController.delete);

module.exports = router;
