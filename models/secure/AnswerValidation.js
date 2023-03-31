const Yup = require("yup");

exports.answerValidation = Yup.object().shape({
  answer: Yup.string()
    .required("لطفا به تمامی سوالات پاسخ دهید ")
    .min(2, "پاسخ نباید کمتر از 2 کاراکتر باشد")
    .max(255, "پاسخ ها نباید بیشتر از 255 کاراکتر باشند"),
});
