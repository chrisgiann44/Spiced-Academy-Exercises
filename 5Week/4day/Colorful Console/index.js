const chalk = require("chalk");
const querystring = require("querystring");

const http = require("http");

const server = http.createServer().listen(8080, () => {
    console.log("Server is on mate");
});

server.on("request", (request, response) => {
    request.on("error", err => {
        console.log("req err: ", err);
    });
    response.on("error", err => {
        console.log("res err: ", err);
    });

    if (request.method == "GET") {
        response.setHeader("content-type", "text/html");
        response.statusCode = 200;
        response.write(`<!doctype html>
        <html>
        <title>Colors</title>
        <form method="POST">
          <input type="text" name="text">
          <select name="color">
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="gray">gray</option>
            <option value="magenta">magenta</option>
            <option value="cyan">cyan</option>
          </select>
          <button type="submit">Go</button>
        </form>
        </html>`);
        response.end();
    } else if (request.method == "POST") {
        var body = "";
        response.statusCode = 200;
        request
            .on("data", chunk => {
                body += chunk;
            })
            .on("end", () => {
                let newBody = querystring.parse(body, "&");
                let text = newBody.text;
                let selColor = newBody.color;
                console.log(chalk[selColor](text));
                response.write(`<!doctype html>
                    <html>
                    <title>${text}</title>
                    <a href="/" style="color:${selColor}">${text}</a>
                    </html>`);
                response.end();
            });
    } else {
        response.statusCode = 405;
        response.end();
    }
});
