var express = require("express");
var router = express.Router();
var controller = require("../../controllers/BookController")

router.post("/create", controller.create_book);
// // router.get("/Template_by_user", controller.get_all_Template_by_user);
router.get("/get",controller.get_all_book);
router.get("/getall",controller.getall_bookandarticle);
// // router.get("/:id", controller.get_Template_by_id);
//router.patch("/:id", controller.edit_book);
router.patch("/update", controller.edit_book);
router.delete("/del", controller.delete_book);
module.exports = router;