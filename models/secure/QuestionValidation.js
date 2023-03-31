const Yup = require("yup");

exports.questionValidation = Yup.object().shape({
  question: Yup.string()
    .required("وارد کردن سوال الزامی میباشد")
    .min(5, "متن سوال نباید کمتر از 5 کاراکتر باشد ")
    .max(255, "متن سوال نباید بیشتر از 255 کاراکتر باشد"),
});
