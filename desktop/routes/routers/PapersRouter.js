var express = require("express");
var router = express.Router();
var controller = require("../../controllers/PapersController")

router.post("/create", controller.create_Papers);
// // router.get("/Template_by_user", controller.get_all_Template_by_user);
router.get("/get",controller.get_all_Papers);
//router.get("/getall",controller.getall_bookandarticle);
// // router.get("/:id", controller.get_Template_by_id);
//router.patch("/:id", controller.edit_book);
router.patch("/update", controller.edit_Papers);
router.delete("/del", controller.delete_Papers);
module.exports = router;