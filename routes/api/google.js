const router = require("express").Router();
const googControl = require("../../controllers/googController");

router.route("/")
    .get (googControl.findAll);

module.exports = router;