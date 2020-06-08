const router = require("express").Router();
const plantsController = require("../../controllers/plantsControllers");

// Matches with "/api/plants"
router.route("/plants")
  .get(plantsController.findAll)
  // .post(controller.create);

// Matches with "/api/plants/:id"
router
  .route("/plants/:id")
  .get(plantsController.findById)
  .put(plantsController.update)
  .delete(plantsController.remove);

module.exports = router;