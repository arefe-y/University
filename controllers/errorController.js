exports.get404 = (req, res) => {
  res.render("errors/404", {
    pageTitle: "صفحه پیدا نشد | 404",
    path: "/404",
  });
};
