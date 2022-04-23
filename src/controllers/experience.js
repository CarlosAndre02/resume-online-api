const Resume = require('../models/Resume');
const Experience = require('../models/Experience');

module.exports = {
  async index(req, res) {
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

      const experience = await Experience.findAll({
        where: { resume_id: resume.id },
        attributes: ['id', 'position', 'company', 'start_date', 'end_date', 'description', 'resume_id'],
      });
      return res.json(experience);
    } catch (e) {
      return res.json(null);
    }
  },
  async create(req, res) {
    const { userUsername } = req;
    const { description = null, ...requestBody } = req.body;

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

      const newExperience = await Experience.create({
        ...requestBody, description, resume_id: resume.id,
      });

      return res.json({
        id: newExperience.id,
        position: newExperience.position,
        company: newExperience.company,
        start_date: newExperience.start_date,
        end_date: newExperience.end_date,
        description: newExperience.description,
        resume_id: newExperience.resume_id,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  },
  async show(req, res) {
    try {
      const experience = await Experience.findByPk(req.params.id, {
        attributes: ['id', 'position', 'company', 'start_date', 'end_date', 'description', 'resume_id'],
      });

      if (!experience) {
        return res.status(400).json({
          errors: ['Experiência não existe'],
        });
      }

      return res.json(experience);
    } catch (e) {
      return res.json(null);
    }
  },
  async update(req, res) {
    try {
      const experience = await Experience.findByPk(req.params.id);

      if (!experience) {
        return res.status(400).json({
          errors: ['Experiência não existe'],
        });
      }

      const newData = await experience.update(req.body);
      return res.json({
        id: newData.id,
        position: newData.position,
        company: newData.company,
        start_date: newData.start_date,
        end_date: newData.end_date,
        description: newData.description,
        resume_id: newData.resume_id,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  },
  async delete(req, res) {
    try {
      const experience = await Experience.findByPk(req.params.id);

      if (!experience) {
        return res.status(400).json({
          errors: ['Experiência não existe'],
        });
      }

      await experience.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  },
};
