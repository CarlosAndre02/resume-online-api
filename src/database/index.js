const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const userModel = require('../models/User');
const resumeModel = require('../models/Resume');
const profileModel = require('../models/Profile');
const photosModel = require('../models/Photos');
const aboutModel = require('../models/About');
const skillModel = require('../models/Skill');
const experienceModel = require('../models/Experience');
const educationModel = require('../models/Education');

const models = [
  userModel,
  resumeModel,
  profileModel,
  photosModel,
  aboutModel,
  skillModel,
  experienceModel,
  educationModel,
];

const connection = new Sequelize(databaseConfig[process.env.NODE_ENV]);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models),
);
