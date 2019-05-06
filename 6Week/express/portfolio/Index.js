const express = require("express");
const app = express();
const indexPage = require("./indexpage.js");
var basicAuth = require("basic-auth");

let text = indexPage();

app.use(
    require("body-parser").urlencoded({
        extended: false
    })
);
app.use(require("cookie-parser")());

//////////ROUTS////////////////

app.use("/favicon.ico", (req, res) => {
    res.sendStatus(404);
});

app.use((req, res, next) => {
    if (req.cookies.accept || req.url == "/cookie") {
        next();
    } else {
        res.cookie("nextUrl", req.url);
        res.redirect("/cookie");
    }
});

app.use("/ticker", function(req, res, next) {
    var creds = basicAuth(req);
    if (!creds || creds.name != "discoduck" || creds.pass != "opensesame") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
});

app.use(express.static("./projects"));

app.get("/", (req, res) => {
    res.send(text);
});

app.get("/cookie", (req, res) => {
    if (req.cookies.accept) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.post("/cookie", (req, res) => {
    if (req.body.input == "accept") {
        res.cookie("accept", 1);
        let redirectionLink = req.cookies.nextUrl || "/";
        res.redirect(redirectionLink);
    } else {
        res.send(`You should accept to see the content`);
    }
});

app.listen(8080, () => console.log(`I'm listening....`));
