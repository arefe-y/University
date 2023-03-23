const Yup = require("yup");

exports.userValidation = Yup.object().shape({
  fullname: Yup.string()
    .required("نام و نام خانوادگی  الزامی میباشد")
    .min(3, "نام و نام خانوادگی نباید کمتر از 3 کاراکتر باشد")
    .max(50, "نام و نام خانوادگی نباید بیشتر 50 کاراکتر باشد"),
  email: Yup.string()
    .required("ایمیل الزامی میباشد")
    .email("ایمیل معتبر نمیباشد"),
  password: Yup.string()
    .required("کلمه عبور الزامی میباشد ")
    .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد ")
    .max(10, "کلمه عبور نباید بیشتر از 10 کاراکتر باشد "),
  confirmPassword: Yup.string()
    .required("تکرار کلمه عبور الزامی میباشد")
    .oneOf([Yup.ref("password"), null], "کلمه های عبور یکسان نیستند"),
  role: Yup.number()
    .integer().min(1, "1")
    .max(3, "3"),
});
