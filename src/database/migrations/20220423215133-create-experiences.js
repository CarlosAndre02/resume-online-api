module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('experiences', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    position: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    company: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    start_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    end_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
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

  down: (queryInterface) => queryInterface.dropTable('experiences'),
};
