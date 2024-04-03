const mongoose = require("mongoose");

// creating schema
const TodoSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true}
})

// creating model
const TodoModel = mongoose.model("todo", TodoSchema);

module.exports = TodoModel;
