const router = require("express").Router();
const BookController = require("../controller/BookController.js");

router.post("/",BookController.addABook);
router.get("/:id",BookController.getABook)
router.get("/",BookController.getAllBook);
router.put("/:id",BookController.updateABook);
router.delete("/:id",BookController.deleteABook)

module.exports = router