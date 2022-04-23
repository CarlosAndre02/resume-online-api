const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const userModel = require('../models/User');
const resumeModel = require('../models/Resume');
const profileModel = require('../models/Profile');
const photosModel = require('../models/Photos');
const aboutModel = require('../models/About');

const models = [userModel, resumeModel, profileModel, photosModel, aboutModel];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
