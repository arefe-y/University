const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");
const Users = require("./users");

const Admins = sequelize.define("Admins", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  // userId: {
  //   type: DataTypes,
  //   allowNull: false,
  // },
});

Users.hasOne(Admins, { foreignKey: "userId" });
Admins.belongsTo(Users, { foreignKey: "userId" });

module.exports = Admins;
