const { userValidation } = require("../models/secure/userValidation");

exports.validate = async (req, res, next) => {
  try {
    await userValidation.validate(req.body);
    next();
  } catch (error) {
    console.log(error);
  }
};
