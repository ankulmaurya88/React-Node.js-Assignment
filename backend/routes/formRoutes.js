const express = require("express");
const {
  createForm,
  getForms,
  getFormById,
  updateForm,
} = require("../controllers/formController");

const router = express.Router();

router.route("/").post(createForm).get(getForms);
router.route("/:id").get(getFormById).put(updateForm);

module.exports = router;
