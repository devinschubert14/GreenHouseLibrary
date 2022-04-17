const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const booksSchema = new Schema (
    {
        title: {type: [String], required: true},
        author: {type: [String], required: true},
        isbn: {type: int, required: true},
        rating: {type: [String], required: true}
    },
    {
        timestamps: true,
    }
);

const Books = mongoose.model("Books", booksSchema);
module.exports = Books;