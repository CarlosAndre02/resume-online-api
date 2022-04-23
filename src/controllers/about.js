const Resume = require('../models/Resume');
const About = require('../models/About');

module.exports = {
  async show(req, res) {
    const { userUsername } = req;

    try {
      const resume = await Resume.findOne({
        where: { username: userUsername },
        attributes: ['id'],
      });

      if (!resume) {
        return res.status(400).json({
          errors: ['Currículo não existe'],
        });
      }

      const about = await About.findOne({
        where: { resume_id: resume.id },
        attributes: ['id', 'description', 'resume_id'],
      });

      return res.json(about);
    } catch (e) {
      return res.json(null);
    }
  },
  async update(req, res) {
    const { userUsername } = req;
    const { description } = req.body;

    try {
      const resume = await Resume.findOne({
        where: { username: userUsername },
        attributes: ['id'],
      });

      if (!resume) {
        return res.status(400).json({
          errors: ['Currículo não existe'],
        });
      }

      const [about, created] = await About.findOrCreate({
        where: { resume_id: resume.id },
        attributes: ['id', 'description', 'resume_id'],
        defaults: { description },
      });

      if (created) {
        return res.json(about);
      }

      const newAbout = await about.update(req.body);
      return res.json(newAbout);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  },
};
