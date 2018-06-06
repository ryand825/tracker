const express = require("express");
const router = express.Router();

// @route GET api/settings/test
// @desc Tests settings route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "settings test" }));

// @route GET api/settings/test
// @desc Tests settings route
// @access Public
// router.get("/settings", (req, res => {}));

module.exports = router;
