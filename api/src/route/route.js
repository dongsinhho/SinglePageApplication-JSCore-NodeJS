const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");


router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/logout', controller.logout);
router.get('/test', auth , controller.test);
// router.post('/register', controller.register);
// router.post('/register', controller.register);
// router.post('/register', controller.register);
// router.post('/register', controller.register);
// router.post('/register', controller.register);
// router.post('/register', controller.register);

module.exports = router;