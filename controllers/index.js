const indexController = {};

indexController.getHome = function (req, res, next) {
  // simulate data model
  let pageName = "IndexPage";
  let user = "Sahmie";
  let time = new Date().toLocaleDateString();

  res.render("index", { pageName: pageName, user: user, time: time ,title:"car marketing brands"});
};

module.exports = indexController;