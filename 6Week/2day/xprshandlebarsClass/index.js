const express = require("express");
const hb = require("express-handlebars");
const app = express();
const futuramaArr = require("./futuramadata.json");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home", {
        layout: "main",
        sitename: "Futurama",
        characters: futuramaArr
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        layout: "main"
    });
});

app.get("/:name", (req, res) => {
    res.render("character", {
        layout: "main",
        imgName: req.params.name.toLowerCase(),
        characters: futuramaArr
    });
});

app.listen(8080, () => {
    console.log("I am listening");
});
