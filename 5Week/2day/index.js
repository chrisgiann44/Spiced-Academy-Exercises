var fs = require("fs");

function logSize(url) {
    fs.readdir(url, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log(err);
            process.exit();
        }
        for (var i = 0; i < files.length; i++)
            if (files[i].isFile()) {
                statFind(url, files[i].name);
            } else {
                logSize(url + "/" + files[i].name);
            }
    });
}

function statFind(url, arg) {
    fs.stat(url + "/" + arg, (err, stat) => {
        if (err) {
            console.log(err);
        }
        console.log(url + arg + ": " + stat.size);
    });
}

logSize(__dirname + "/" + "fun-with-fs");
