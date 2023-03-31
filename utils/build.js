const Users = require("../models/users");
const Admin = require("../models/admins");
const Experts = require("../models/experts");
const sequelize = require("./database");
const { initModels } = require("../models/initModel");

async function create() {
  try {
    const admin = await Users.create({
      fullname: "عارفه یوسفی",
      email: "arefeh.yousefi98@gmail.com",
      password: "1234",
      role: 1,
    });
    await Admin.create({ userId: admin.userId });

    const expert1 = await Users.create({
      fullname: "محمد توسلیان",
      email: "mohammadtavassolian3@gmail.com",
      password: "1234",
      role: 2,
    });
    await Experts.create({ userId: expert1.userId });

    const expert2 = await Users.create({
      fullname: "مریم اجارودی",
      email: "ouj.mary@gmail.com",
      password: "1234",
      role: 2,
    });
    await Experts.create({ userId: expert2.userId });
  } catch (err) {
    console.log(err);
  }
}
create();

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    initModels();
  })
  .catch((err) => {
    console.log(err);
  });
