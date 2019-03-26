const path = require("path");
const router = require("express").Router();
const book = require("./book");
const goog = require("./google");

router.use("/book", book);
router.use("/google", goog);

router.use((req, res) =>
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
);

module.exports = router;