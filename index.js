const express = require("express");
const mongoose = require("mongoose");
const { join } = require("path");
const methodOverride = require('method-override');
const todoRoutes = require("./routes/todo");


const app = express();


// create connection with mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mytodos')
    .then(() => console.log("DB connected"))
    .catch(err => console.log(err))


// set static files and view engine 
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "public")));


// parse the body
app.use(express.urlencoded());
// method override
app.use(methodOverride('_method'));
// set route
app.use(todoRoutes);



const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:8080`)
})


