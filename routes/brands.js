var express = require("express");
var router = express.Router();

var brandsController = require("../controllers/brands");
/* GET home page. */
router.get("/", brandsController.getAllPosts);


router.post("/", brandsController.createAPost);

router.get("/:id/delete", brandsController.deleteAPost);

// get record details
router.get("/:id/edit", brandsController.editAPost);

// update record
router.post("/:id/edit", brandsController.updateAPost);

// http://localhost:3000/blog/1/delete

// get post delete
// delete
// update
// router.post("/", blogController.createAPost);

// get post delete

module.exports = router;