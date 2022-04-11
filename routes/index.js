var express = require('express');
var router = express.Router();
var indexcontroller= require("../controllers/index");
/* GET home page. */

router.get('/',indexcontroller.getHome);

module.exports = router;