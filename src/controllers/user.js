const User = require('../models/User');
const Resume = require('../models/Resume');

module.exports = {
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'username'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  },
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, username } = newUser;

      await Resume.create({ username });

      return res.json({ id, username });
    } catch (e) {
      return res.status(400).json(
        Array.isArray(e.errors) ? {
        errors: e.errors.map((err) => err.message),
      } : {
        errors: e
      });
    }
  },
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, username } = user;
      return res.json({ id, username });
    } catch (e) {
      return res.json(null);
    }
  },
  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const newData = await user.update(req.body);
      const { id, username } = newData;
      return res.json({ id, username });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  },
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  },
};
