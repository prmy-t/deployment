const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

router.post("/admin/login", controller.postLogin);
router.post("/admin/file-upload", controller.postFileUpload);
router.post("/admin/edit-site/add-mcq", controller.postAddMcq);

module.exports = router;
