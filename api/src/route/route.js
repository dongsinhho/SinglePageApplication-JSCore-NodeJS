const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");


router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/logout', controller.logout);
router.get('/test', controller.test);
// router.post('/register', controller.register);
// router.post('/register', controller.register);
// router.post('/register', controller.register);
// router.post('/register', controller.register);
// router.post('/register', controller.register);
// router.post('/register', controller.register);