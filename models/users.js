const { DataTypes } = require("sequelize");
const bcrypt=require('bcryptjs');

const sequelize = require("../utils/database");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [4, 10],
  },
  role:{
    type:DataTypes.INTEGER,
    allowNull:false,
    max:3,
    min:1
  }
}
);

User.beforeCreate(async(user,options)=>{
  return bcrypt.hash(user.password,10).then(hash=>{
    user.password=hash
  }).catch(err=>{
    throw new Error()
  })

})


module.exports = User;
