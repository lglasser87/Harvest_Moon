const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/books"
router.route("/plants")
  .get(controller.findAll)
  // .post(controller.create);

// Matches with "/api/books/:id"
router
  .route("/plants/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;