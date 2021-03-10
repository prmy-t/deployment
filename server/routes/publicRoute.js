const express = require("express");
const router = express.Router();
const controller = require("../controllers/publicController");

router.get("/get-mcq-catagories", controller.getMcqCatagories);

module.exports = router;
