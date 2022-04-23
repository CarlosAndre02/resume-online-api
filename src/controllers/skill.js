const Resume = require('../models/Resume');
const Skill = require('../models/Skill');

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

      const skills = await Skill.findAll({
        where: { resume_id: resume.id },
        attributes: ['id', 'skill', 'resume_id'],
      });
      return res.json(skills);
    } catch (e) {
      return res.json(null);
    }
  },
  async create(req, res) {
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

      const newSkill = await Skill.create({ ...req.body, resume_id: resume.id });
      const { id, skill, resume_id } = newSkill;

      return res.json({ id, skill, resume_id });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  },
  async show(req, res) {
    try {
      const skill = await Skill.findByPk(req.params.id, {
        attributes: ['id', 'skill', 'resume_id'],
      });

      if (!skill) {
        return res.status(400).json({
          errors: ['Habilidade não existe'],
        });
      }

      return res.json(skill);
    } catch (e) {
      return res.json(null);
    }
  },
  async update(req, res) {
    try {
      const skill = await Skill.findByPk(req.params.id);

      if (!skill) {
        return res.status(400).json({
          errors: ['Habilidade não existe'],
        });
      }

      const newData = await skill.update(req.body);
      const { id, skill: newSkill, resume_id } = newData;
      return res.json({ id, skill: newSkill, resume_id });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  },
  async delete(req, res) {
    try {
      const skill = await Skill.findByPk(req.params.id);

      if (!skill) {
        return res.status(400).json({
          errors: ['Habilidade não existe'],
        });
      }

      await skill.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  },
};
