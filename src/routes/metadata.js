const express = require("express");
const router = express.Router();

router.get("/:module_name/:screen_name", function (req, res) {
  var { module_name, screen_name } = req.params;
  var jsonData = require(`../ui-config/specification/${module_name}/${screen_name}`);
  res.send(jsonData);
});

module.exports = router;
