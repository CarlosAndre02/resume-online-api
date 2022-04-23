module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('skills', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    skill: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    resume_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'resumes',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('skills'),
};
