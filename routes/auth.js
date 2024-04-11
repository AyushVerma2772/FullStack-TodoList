const express = require("express");
const UserModel = require("../models/UserModel");
const passport = require("passport");

const router = express.Router();


// Show signup page
router.get("/signup", (req, res) => {
    res.render("signup")
})

// Signup the user
router.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const user = new UserModel({ username })
    const newUser = await UserModel.register(user, password);
    res.redirect("/login");
})


// Show login page
router.get("/login", (req, res) => {
    res.render("login")
})


// login the user
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
    res.redirect("/");
});




module.exports = router;
