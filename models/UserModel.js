const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    todos: [{
        title: { type: String, require: true, trim: true},
        todoList: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Todo"
        }]
    }]
});

userSchema.plugin(passportLocalMongoose);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
