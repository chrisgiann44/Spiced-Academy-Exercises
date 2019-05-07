const express = require("express");
const hb = require("express-handlebars");
const fs = require("fs");
const app = express();
let descriptions = require("./descriptions.json");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("public"));

let projsArr = [];

fs.readdir(
    __dirname + "/public/projects",
    { withFileTypes: true },
    (err, files) => {
        if (err) {
            console.log(err);
            process.exit();
        } else {
            for (var i = 0; i < files.length; i++) {
                projsArr.push(files[i].name);
            }
            console.log(projsArr);
        }
    }
);

app.get("/", (req, res) => {
    res.render("home", {
        layout: "main",
        projects: projsArr
    });
});

app.get("/:name", (req, res) => {
    let reqName = req.params.name;
    if (projsArr.includes(reqName)) {
        res.render("discrpage", {
            layout: "main",
            projdescr: descriptions[reqName],
            imgName: reqName.toLowerCase(),
            projects: projsArr
        });
    } else {
        res.render("discrnotexistingpage", {
            layout: "main",
            projects: projsArr
        });
    }
});

app.listen(8080, () => {
    console.log("I am listening");
});
