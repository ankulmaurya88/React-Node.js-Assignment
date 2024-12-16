const express = require("express");
const { saveResponse } = require("../controllers/responseController");

const router = express.Router();

router.route("/").post(saveResponse);

module.exports = router;
