const express = require("express");
const TodoModel = require("../models/TodoModel");


const router = express.Router();


router.get("/", async (req, res) => {
    const todos = await TodoModel.find();
    // console.log(todos)
    res.render("index", { todos })
})

router.post("/", async (req, res) => {
    const data = req.body;
    await TodoModel.create(data);
    res.redirect("/");
})

router.get("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const todo = await TodoModel.findById(id);
    res.render("show", { todo })
})

router.get("/todos/:id/edit", async (req, res) => {
    const { id } = req.params;
    const todo = await TodoModel.findById(id);
    // console.log(todo)
    res.render("edit", { todo })
})

router.patch("/todos/:id", async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    await TodoModel.findByIdAndUpdate(id, data);
    res.redirect("/");
})

router.delete("/todos/:id", async (req, res) => {
    const { id } = req.params;
    await TodoModel.findByIdAndDelete(id);
    res.redirect("/")
})


module.exports = router;
