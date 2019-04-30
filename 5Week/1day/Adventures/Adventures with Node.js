const readline = require("readline");
const story = require("./story.json");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var path = story;

function ask(q) {
    rl.question(q, function(answer) {
        if (typeof path.answers[answer] === "object") {
            path = path.answers[answer];
            ask(path.q);
        } else {
            console.log(path.answers[answer]);
            rl.close();
        }
    });
}

ask(path.q);
