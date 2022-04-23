const Resume = require('../models/Resume');
const Profile = require('../models/Profile');
const Photo = require('../models/Photos');
const About = require('../models/About');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');
const Education = require('../models/Education');

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
          {
            model: About,
            attributes: ['id', 'description', 'resume_id'],
          },
          {
            model: Skill,
            attributes: ['id', 'skill', 'resume_id'],
          },
          {
            model: Experience,
            attributes: ['id', 'position', 'company', 'start_date', 'end_date', 'description', 'resume_id'],
          },
          {
            model: Education,
            attributes: ['id', 'degree', 'school', 'start_date', 'end_date', 'description', 'resume_id'],
          },
        ],
      });
      return res.json(resume);
    } catch (e) {
      return res.json(null);
    }
  },
};
