var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UsersController')

router.post("/login", UserController.Userslogin);

module.exports = router;
