const controler = require("../controllers/ProductController");
const router = require("express").Router();

router.route("/").get(controler.getAll);

router.route("/:id").get(controler.getById);

router.route("/").post(controler.create);

router.route("/:id").put(controler.update);

router.route("/:id").delete(controler.deleteById);

module.exports = router; 