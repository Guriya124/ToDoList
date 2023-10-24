const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let newIteams = [];
const ListTitle = "Your ToDo List";

app.get('/', (req, res) => {

    res.render('list', { newIteams, ListTitle });
});
app.post('/', (req, res) => {
    let newItem = req.body.newIteams;
    newIteams.push(newItem);

    res.redirect('/');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
