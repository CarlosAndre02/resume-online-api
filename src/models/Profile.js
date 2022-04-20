const { Sequelize, Model } = require('sequelize');

module.exports = class Profile extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'O nome precisa ter entre 3 e 255 caracteres',
            },
          },
        },
        position: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'O cargo precisa ter entre 3 e 255 caracteres',
            },
          },
        },
        phone_number: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 50],
              msg: 'O telefone precisa ter entre 6 e 50 caracteres',
            },
          },
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'O endereço precisa ter entre 3 e 255 caracteres',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'E-mail inválido',
            },
          },
        },
        website: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: '',
          validate: {
            isUrl: {
              msg: 'Website inválido',
            },
          },
        },
        linkedin_link: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: '',
          validate: {
            isUrl: {
              msg: 'Linkedin inválido',
            },
          },
        },
        github_link: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: '',
          validate: {
            isUrl: {
              msg: 'Github inválido',
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

  static associate(models) {
    this.belongsTo(models.Resume);
  }
};
