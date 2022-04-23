const { Router } = require('express');

const router = Router();

const educationController = require('../controllers/education');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

router.get('/resumes/:username/educations', ensureAuthenticated, educationController.index);
router.post('/resumes/:username/educations', ensureAuthenticated, educationController.create);
router.get('/resumes/:username/educations/:id', educationController.show);
router.put('/resumes/:username/educations/:id', ensureAuthenticated, educationController.update);
router.delete('/resumes/:username/educations/:id', ensureAuthenticated, educationController.delete);

module.exports = router;
