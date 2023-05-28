const router = require("express").Router();
const AuthorController = require("../controller/AuthorController.js");

//[POST] /api/author
router.post("/",AuthorController.addAuthor);
router.get("/:id",AuthorController.getAnAuthor);
router.get("/",AuthorController.getAllAuthor);
router.put("/:id",AuthorController.updateAnAuthor);
router.delete("/:id",AuthorController.deleteAnAuthor);
module.exports = router;