const { Sequelize, Model } = require('sequelize');

module.exports = class Skill extends Model {
  static init(sequelize) {
    super.init(
      {
        skill: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio.',
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
