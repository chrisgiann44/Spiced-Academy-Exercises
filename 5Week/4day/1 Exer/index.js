const http = require("http");

const fs = require("fs");

const server = http.createServer().listen(8080, () => {
    console.log("Server is on mate");
});

server.on("request", (request, response) => {
    //* Error Handling *//
    request.on("error", err => {
        console.log("req err: ", err);
    });
    response.on("error", err => {
        console.log("res err: ", err);
    });

    console.log("Req Method is: ", request.method);
    console.log("Req URL is: ", request.url);
    console.log("Req Headers are: ", request.headers);

    if (request.method == "GET") {
        console.log(request.url);
        if (request.url == "/requests.txt") {
            response.setHeader("Content-Type", "text/plain");
            let readable = fs.createReadStream("requests.txt");
            readable.pipe(response);
            readable.on("data", chuck => {
                response.write(chuck);
            });
            readable.on("end", chuck => {
                response.end();
            });
        } else {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.write(`<!doctype html>
                    <html>
                    <title>Hello World! Hello Peter</title>
                    <p>Hello World! Ela Petros
                    </html>`);
            response.end();
        }
    } else if (request.method == "POST") {
        response.setHeader("Location", "/");
        response.statusCode = 302;
        response.end();
    } else {
        response.statusCode = 405;
        console.log(response.statusCode);
        response.end();
    }

    const { headers } = request;
    const userAgent = headers["user-agent"];

    let reqData =
        `${new Date()} ${request.method} ${request.url} ${userAgent}` + "\n";

    fs.appendFile("requests.txt", reqData, err => {
        if (err) throw err;
    });
});
