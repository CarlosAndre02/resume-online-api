const { Sequelize, Model } = require('sequelize');
const bcryptjs = require('bcryptjs');

module.exports = class User extends Model {
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
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 50],
              msg: 'A senha precisa ter entre 3 e 50 caracteres',
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  isPasswordValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
};
