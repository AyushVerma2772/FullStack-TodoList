const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: { type: String, require: true, trim: true },
    description: { type: String, require: true, trim: true },
});

const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;
