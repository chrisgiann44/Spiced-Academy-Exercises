const url = require("url");
const queryString = require("querystring");

// console.log(process);

var currentUrl = process.argv[2];
var parsedUrl = url.parse(currentUrl);
console.log(parsedUrl);
let parsedQ = queryString.parse(parsedUrl.query);

setTimeout(function() {
    console.log(parsedQ);
    console.log("The host is :-" + currentUrl.host);
    console.log("The hostname is :-" + currentUrl.hostname);
    console.log("The port is :-" + currentUrl.port);
    console.log("The pathname is :-" + currentUrl.pathname);
    console.log("The query is :-" + currentUrl.query);
    console.log("The value of the a parameter is :-" + parsedQ.a);
    console.log("The value of the b parameter is :-" + parsedQ.b);
}, 200);
