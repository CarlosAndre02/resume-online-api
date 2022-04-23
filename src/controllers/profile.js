const Resume = require('../models/Resume');
const Profile = require('../models/Profile');
const Photo = require('../models/Photos');

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

      const profile = await Profile.findOne({
        where: { resume_id: resume.id },
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
        include: [
          {
            model: Photo,
            attributes: ['id', 'originalname', 'filename', 'url', 'profile_id'],
          },
        ],
      });

      return res.json(profile);
    } catch (e) {
      return res.json(null);
    }
  },
  async update(req, res) {
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

      const [profile, created] = await Profile.findOrCreate({
        where: { resume_id: resume.id },
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
        defaults: {
          name: req.body.name,
          position: req.body.position,
          phone_number: req.body.phone_number,
          address: req.body.address,
          email: req.body.email,
          website: req.body.website || null,
          linkedin_link: req.body.linkedin_link || null,
          github_link: req.body.github_link || null,
        },
      });

      if (created) {
        return res.json(profile);
      }

      const newProfile = await profile.update(req.body);
      return res.json(newProfile);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  },
};
