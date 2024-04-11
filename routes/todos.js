const express = require("express");
const { isLoggedIn } = require("../middlewares/middleware");
const UserModel = require("../models/UserModel");
const TodoModel = require("../models/TodoModel");

const router = express.Router();

// Showing home page
router.get("/", isLoggedIn, (req, res) => {
    // console.log(">>", req.user)
    res.render("index.ejs")
})


// Adding title to the DB
router.post("/title/new", isLoggedIn, async (req, res) => {
    const { title } = req.body;
    const user = await UserModel.findById(req.user._id);
    user.todos.push({ title });
    await user.save();
    res.redirect("/")
})


// showing todos of a particular title
router.get("/todos/:titleId", isLoggedIn, async (req, res) => {
    const { titleId } = req.params;
    const user = await UserModel.findById(req.user._id).populate("todos.todoList");
    const todosObj = user.todos.find(obj => obj._id == titleId);
    res.render("showTodos", { titleId, todosObj });
})

// Delete a title
router.delete("/todos/:titleId", isLoggedIn, async (req, res) => {
    const { titleId } = req.params;
    const user = await UserModel.findById(req.user._id);
    const newTodos = user.todos.filter(obj => obj._id != titleId);
    user.todos = newTodos;
    await user.save();
    res.redirect("/");
})




router.post("/todos/:titleId/new", isLoggedIn, async (req, res) => {
    const { titleId } = req.params;
    const user = await UserModel.findById(req.user._id);
    const todosObj = user.todos.find(obj => obj._id == titleId);
    const newTodo = new TodoModel(req.body);
    todosObj.todoList.push(newTodo._id)
    await user.save();
    await newTodo.save();

    res.redirect(`/todos/${titleId}/`)

})


// showing a particular todo
router.get("/todos/:todoObjId/todo/:todoId", isLoggedIn, async (req, res) => {
    const { todoId, todoObjId } = req.params;
    const todo = await TodoModel.findById(todoId);
    res.render("show", { todoObjId, todo })
})


// show edit form 
router.get("/todos/:todoObjId/todo/:todoId/edit", isLoggedIn, async (req, res) => {
    const { todoId, todoObjId } = req.params;
    const todo = await TodoModel.findById(todoId);
    res.render("edit", { todo, todoObjId });
})


// actually edit
router.patch("/todos/:todoObjId/todo/:todoId", isLoggedIn, async (req, res) => {
    const { title, description } = req.body;
    const { todoId, todoObjId } = req.params;
    await TodoModel.findByIdAndUpdate(todoId, { title, description });
    res.redirect(`/todos/${todoObjId}/`);

})


router.delete("/todos/:todoObjId/todo/:todoId/", isLoggedIn, async (req, res) => {
    const { todoId, todoObjId } = req.params;

    const user = await UserModel.findById(req.user._id);
    const todosObj = user.todos.find(obj => obj._id == todoObjId);

    let newTodoList = todosObj.todoList.filter(e => e != todoId);
    todosObj.todoList = newTodoList;
    await user.save();

    await TodoModel.findByIdAndDelete(todoId);

    res.redirect(`/todos/${todoObjId}/`);
})


module.exports = router;
