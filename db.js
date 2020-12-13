const Sequelize = require("sequelize");

const sequelize = new Sequelize("trinity-directory", "postgres", "ashtonefa", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
