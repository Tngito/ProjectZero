const pool = require("../models/index");
const brandsController = {};

brandsController.getAllPosts = function (req, res, next) {
  // get all posts from database
  pool.query("SELECT * FROM brandsblack", (error, results) => {
    if (error) {
      throw error;
    }
    return res.render("brands", { brandsPosts: results.rows });
  });
};

brandsController.createAPost = function (req, res, next) {
  // req.body
  let manufacturer = req.body.manufacturer ;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;



  pool.query(
    `INSERT INTO brandsblack (MANUFACTURER,MODEL,COLOR,YEAR ) VALUES ($1 , $2, $3, $4)`,
    [manufacturer , model, color, year],
    (error, results) => {
      console.log(results);
      if (error) {
        throw error;
      }
      return res.render("brands", { brandsPosts: [] });
    }
  );
};

brandsController.deleteAPost = function (req, res, next) {
  // get resource id

  const id = req.params.id;

  // Replace sahmie in Blackforcesahmie with your fullname - no spaces
  pool.query(
    "DELETE FROM brandsblack WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/brands");
    }
  );
};

brandsController.editAPost = function (req, res, next) {
  const id = req.params.id;

  pool.query(
    "SELECT * FROM brandsblack WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.render("brandsEdit", { brandsPost: results.rows[0] });
    }
  );
};

brandsController.updateAPost = function (req, res, next) {
  const id = req.params.id;

  let manufacturer = req.body.manufacturer ;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;

  pool.query(
    "UPDATE brandsblack SET manufacturer = $1, model = $2, color = $3, year = $4 WHERE id = $5",
    [manufacturer , model, color, year, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/brands");
    }
  );
};

module.exports = brandsController;