const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: false },
  author: { type: String, required: false },
  description: {type: String},
  img_Url: {type: String},
  link: {type: String}
  
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;