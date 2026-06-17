const express = require("express");
const router = express.Router();

const Book = require("../models/Book");

// =================
// GET ALL BOOKS
// =================

router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.delete("/:id", async (req, res) => {

    try {

        await Book.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Book Deleted"
        });

    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

});

// =================
// ADD BOOK
// =================

router.post("/", async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();

        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;