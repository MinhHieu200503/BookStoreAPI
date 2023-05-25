const router = require("express").Router();
const BookController = require("../controller/BookController.js");

router.post("/",BookController.addABook);

module.exports = router