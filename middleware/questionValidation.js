const { questionValidation } = require("../models/secure/QuestionValidation");

exports.validate = async (req, res, next) => {
  const userRole=req.user.role;
  const errors=[];
  try {
    await questionValidation.validate(req.body,{abortEarly:false});
    next();
  } catch (err) {
    console.log(err);
    err.errors.forEach((e) => {
      errors.push({
        name: e.path,
        message: e,
      });
    });

    return res.render("Admin/addQuestion", {
      pageTitle: "پرسشنامه",
      path: "/dashboard/add-question",
      layout:"./layouts/dashLayout",
      errors,
      userRole
    });
  }
};
