const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: false },
  author: { type: String, required: false },
  description: {type: String},
  bookInfo: {type: String},
  bookImg: {type: String}
  
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;