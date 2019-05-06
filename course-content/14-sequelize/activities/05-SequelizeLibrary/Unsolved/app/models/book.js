// Dependencies
// =============================================================

// Require the sequelize library
var Sequlize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require("../config/connection.js");
// Create a "Book" model with the following configuration

var Book = sequelize.define("book", {
    title: Sequlize.STRING,
    author: Sequlize.STRING,
    genre: Sequlize.STRING,
    pageNumbers: Sequlize.INTEGER
});

// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER

// Sync model with DB
Book.sync();
// Export the book model for other files to use
module.exports = Book;

