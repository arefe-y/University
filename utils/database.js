const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("uni_db", "root", "Hedwig123!@#", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
