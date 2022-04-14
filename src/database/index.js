const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const userModel = require('../models/User');

const models = [userModel];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
