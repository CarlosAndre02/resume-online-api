module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('profiles', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    position: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone_number: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    website: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    linkedin_link: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    github_link: {
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

  down: (queryInterface) => queryInterface.dropTable('profiles'),
};
