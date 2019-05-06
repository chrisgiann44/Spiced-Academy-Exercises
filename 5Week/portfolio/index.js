const http = require("http");
const fs = require("fs");
const path = require("path");
const indexPage = require("./indexpage.js");

let text = indexPage();

http.createServer((req, res) => {
    if ((req.method = !"GET")) {
        res.statusCode = 405;
        res.end();
        return;
    }

    let myPath = path.normalize(__dirname + "/projects" + req.url);

    if (req.url == "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(text);
        return;
    }

    if (!myPath.startsWith(__dirname + "/projects")) {
        res.statusCode = 403;
        res.end();
        return;
    }

    fs.stat(myPath, function(err, stats) {
        if (err) {
            res.statusCode = 404;
            console.log(err);
            res.end();
            return;
        }
        if (!stats.isFile()) {
            if (!myPath.endsWith("/")) {
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302;
                res.end();
            } else {
                res.setHeader("Location", req.url + "index.html");
                res.statusCode = 302;
                res.end();
            }
        } else {
            const readStream = fs.createReadStream(myPath);
            readStream.pipe(res);
            readStream.on("error", err => {
                console.log(err);
                res.statusCode = 404;
                res.end();
            });
        }
    });
}).listen(8080, () => console.log("Server is on"));
