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

(async () => {
  const connection = new Sequelize(databaseConfig[process.env.NODE_ENV]);

  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  models.forEach((model) => model.init(connection));
  models.forEach(
    (model) => model.associate && model.associate(connection.models)
  );
})();
