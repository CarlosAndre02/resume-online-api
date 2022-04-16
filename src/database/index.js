const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const userModel = require('../models/User');
const resumeModel = require('../models/Resume');

const models = [userModel, resumeModel];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
