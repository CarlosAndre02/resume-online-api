const { Sequelize, Model } = require('sequelize');

module.exports = class Education extends Model {
  static init(sequelize) {
    super.init(
      {
        degree: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio.',
            },
          },
        },
        school: {
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
        tableName: 'educations',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Resume);
  }
};
