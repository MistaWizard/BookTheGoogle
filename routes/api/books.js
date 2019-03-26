const router = require("express").Router();
const booksControl = require("../../controllers/bookController");

router.route("/")
    .get(booksControl.findAll)
    .post(booksControl.create);

router.route("/:id")
    .get(booksControl.findById)
    .put(booksControl.update)
    .delete(booksControl.remove);

module.exports = router;