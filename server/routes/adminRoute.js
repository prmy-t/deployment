const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

router.post("/", controller.postLogin);

module.exports = router;
