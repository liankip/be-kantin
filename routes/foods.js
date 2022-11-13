var express = require('express');
var router = express.Router();
var FoodController = require('../controllers/FoodsController')

router.get("/", FoodController.GetFoods);
router.get("/:id", FoodController.GetFood);
router.post("/", FoodController.AddFood);
router.put("/:id", FoodController.EditFood);

module.exports = router;
