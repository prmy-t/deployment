const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

router.post("/admin/login", controller.postLogin);
router.post("/admin/file-upload", controller.postFileUpload);

module.exports = router;
