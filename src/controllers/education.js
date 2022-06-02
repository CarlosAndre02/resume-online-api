const Resume = require('../models/Resume');
const Education = require('../models/Education');

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

      const education = await Education.findAll({
        where: { resume_id: resume.id },
        attributes: ['id', 'degree', 'school', 'start_date', 'end_date', 'description', 'resume_id'],
      });
      return res.json(education);
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

      const newEducation = await Education.create({
        ...requestBody, description, resume_id: resume.id,
      });

      return res.json({
        id: newEducation.id,
        degree: newEducation.degree,
        school: newEducation.school,
        start_date: newEducation.start_date,
        end_date: newEducation.end_date,
        description: newEducation.description,
        resume_id: newEducation.resume_id,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  },
  async show(req, res) {
    try {
      const education = await Education.findByPk(req.params.id, {
        attributes: ['id', 'degree', 'school', 'start_date', 'end_date', 'description', 'resume_id'],
      });

      if (!education) {
        return res.status(400).json({
          errors: ['Educação não existe'],
        });
      }

      return res.json(education);
    } catch (e) {
      return res.json(null);
    }
  },
  async update(req, res) {
    try {
      const education = await Education.findByPk(req.params.id);

      if (!education) {
        return res.status(400).json({
          errors: ['Educação não existe'],
        });
      }

      const newData = await education.update(req.body);
      return res.json({
        id: newData.id,
        degree: newData.degree,
        school: newData.school,
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
      const education = await Education.findByPk(req.params.id);

      if (!education) {
        return res.status(400).json({
          errors: ['Educação não existe'],
        });
      }

      await education.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  },
};
