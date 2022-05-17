const controller = require("../controllers/CartController");
const router = require("express").Router();

router.route("/:id").get(controller.getById);

router.route("/add_item/:id").post(controller.addItem);

module.exports = router;