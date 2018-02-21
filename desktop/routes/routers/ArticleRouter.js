var express = require("express");
var router = express.Router();
var controller = require("../../controllers/ArticleController")

router.post("/create", controller.create_article);
// // router.get("/Template_by_user", controller.get_all_Template_by_user);
router.get("/get",controller.get_all_article);
//router.get("/getall",controller.getall_bookandarticle);
// // router.get("/:id", controller.get_Template_by_id);
//router.patch("/:id", controller.edit_Template);
module.exports = router;