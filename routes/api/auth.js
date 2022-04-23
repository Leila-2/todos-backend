const express = require("express");
const { authenticate } = require('../../middlewares/index')

const ctrl = require('../../controllers/index')
const router = express.Router();

router.post("/signup", ctrl.signup);
router.post("/login", ctrl.login);
router.get("/current", authenticate, ctrl.current)
router.get('/logout', authenticate, ctrl.logout)

module.exports = router;