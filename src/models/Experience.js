const { Sequelize, Model } = require('sequelize');

module.exports = class Experience extends Model {
  static init(sequelize) {
    super.init(
      {
        position: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio.',
            },
          },
        },
        company: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio.',
            },
          },
        },
        start_date: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: '',
          validate: {
            isDate: {
              msg: 'Data inválida.',
            },
          },
        },
        end_date: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: '',
          validate: {
            isDate: {
              msg: 'Data inválida.',
            },
          },
        },
        description: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: '',
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
