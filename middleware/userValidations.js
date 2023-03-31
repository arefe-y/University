const { userValidation } = require("../models/secure/userValidation");

exports.validate = async (req, res, next) => {
  const errors=[];
  try {
    await userValidation.validate(req.body,{abortEarly:false});
    next();
  } catch (err) {
    console.log(err);
    err.errors.forEach((e) => {
      errors.push({
        name: e.path,
        message: e,
      });
    });

    return res.render("register", {
      pageTitle: "ثبت نام کاربر",
      path: "/register",
      errors,
    });
  }
};
