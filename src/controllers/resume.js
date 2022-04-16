const Resume = require('../models/Resume');

module.exports = {
  async show(req, res) {
    try {
      const { id, username } = await Resume.findOne({
        where: { username: req.params.username },
      });
      return res.json({ id, username });
    } catch (e) {
      return res.json(null);
    }
  },
};
