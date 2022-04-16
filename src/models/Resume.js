const { Sequelize, Model } = require('sequelize');

module.exports = class Resume extends Model {
  static init(sequelize) {
    super.init(
      {
        username: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Usuário já existe',
          },
          validate: {
            len: {
              args: [5, 50],
              msg: 'O username precisa ter entre 5 e 50 caracteres',
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }
};