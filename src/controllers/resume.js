const Resume = require('../models/Resume');
const Profile = require('../models/Profile');
const Photo = require('../models/Photos');

module.exports = {
  async show(req, res) {
    try {
      const resume = await Resume.findOne({
        where: { username: req.params.username },
        attributes: ['id', 'username'],
        include: [
          {
            model: Profile,
            attributes: [
              'id',
              'name',
              'position',
              'phone_number',
              'address',
              'email',
              'website',
              'linkedin_link',
              'github_link',
              'resume_id',
            ],
            include:
              {
                model: Photo,
                attributes: ['id', 'originalname', 'filename', 'url', 'profile_id'],
              },
          },
        ],
      });
      return res.json(resume);
    } catch (e) {
      return res.json(null);
    }
  },
};
