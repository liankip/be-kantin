var express = require('express');
var router = express.Router();
var ReviewController = require('../controllers/ReviewsController')

router.get("/", ReviewController.GetReviews);

module.exports = router;
