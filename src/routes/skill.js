const { Router } = require('express');

const router = Router();

const skillController = require('../controllers/skill');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

router.get('/resumes/:username/skills', ensureAuthenticated, skillController.index);
router.post('/resumes/:username/skills', ensureAuthenticated, skillController.create);
router.get('/resumes/:username/skills/:id', skillController.show);
router.put('/resumes/:username/skills/:id', ensureAuthenticated, skillController.update);
router.delete('/resumes/:username/skills/:id', ensureAuthenticated, skillController.delete);

module.exports = router;
