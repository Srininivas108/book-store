const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const booksController = require("../controllers/booksController.js");

router.get("/", booksController.getAllBooks);
router.post("/add", booksController.addBook);
router.get("/getbook/:id", booksController.getById);
router.put("/update/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;