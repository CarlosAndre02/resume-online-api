const User = require('../models/User');

module.exports = {
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
