const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

// Allows us to chain .then statements
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");

