const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

//GET
router.get("/admin/get-mcq-table", controller.getMcqTable);
router.get("/admin/get-mcq-table/by-tags", controller.getTagsList);
router.get("/admin/get-mcq-table/by-categories", controller.getCategoriesList);

//POST
router.post("/admin/get-mcq-table/by-tags/:tag", controller.getMcqTableByTag);
router.post(
  "/admin/get-mcq-table/by-categories/:category",
  controller.getMcqTableByCategory
);
router.post("/admin/login", controller.postLogin);
router.post("/admin/file-upload", controller.postFileUpload);
router.post("/admin/edit-site/add-mcq", controller.postAddMcq);
router.post("/admin/edit-site/edit-mcq", controller.postEditMcq);
router.post("/admin/edit-site/delete-mcq", controller.postDeleteMcq);
router.post(
  "/admin/edit-site/delete-selected-mcqs",
  controller.postDeleteSelectedMcqs
);

module.exports = router;
