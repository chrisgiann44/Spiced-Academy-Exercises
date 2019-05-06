const express = require("express");
const app = express();
const indexPage = require("./indexpage.js");

let text = indexPage();

app.use(express.static("./projects"));

app.get("/", (req, res) => {
    res.send(text);
});

app.listen(8080, () => console.log(`I'm listening....`));
