const User = require('../models/User');

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
      return res.json({ id, username });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  },
};
