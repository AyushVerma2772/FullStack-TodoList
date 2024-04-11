const express = require("express");
const { join } = require("path");
const todosRoutes = require("./routes/todos");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local");
const UserModel = require("./models/UserModel");
const methodOverride = require('method-override')


const app = express();


// Connection with mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myTodos')
    .then(() => console.log("DB connected"))
    .catch(err => console.log(err))


// set static files and view engine 
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "public")));

app.use(express.urlencoded());
app.use(methodOverride('_method'))

// use session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}))


// initialize session
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());
passport.use(new LocalStrategy(UserModel.authenticate()));


app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

// use Routes
app.use(authRoutes);
app.use(todosRoutes);


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:8080`)
})


