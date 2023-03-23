const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");
const Users=require('./users');

const Students = sequelize.define("Students", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    
  },
  // userId: {
  //   type: DataTypes.UUID,
  //   allowNull: false,
  //   primaryKey: true,
  // },
});

Users.hasOne(Students,{foreignKey:"userId"});
Students.belongsTo(Users,{foreignKey:"userId"})



module.exports=Students