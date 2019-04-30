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

// logSize(__dirname + "/fun-with-fs");

var x = mapSizes(__dirname + "/fun-with-fs/files");

function mapSizes(url) {
    let obj = {};

    let path = url;

    var currentFiles = fs.readdirSync(path, { withFileTypes: true });

    for (var i = 0; i < currentFiles.length; i++) {
        if (currentFiles[i].isFile()) {
            obj[currentFiles[i].name] = fs.statSync(
                path + "/" + currentFiles[i].name
            ).size;
        } else if (currentFiles[i].isDirectory()) {
            obj[currentFiles[i].name] = mapSizes(
                path + "/" + currentFiles[i].name
            );
        }
    }
    return obj;
}

fs.writeFileSync(
    __dirname + "/fun-with-fs/" + "/myFiles.json",
    JSON.stringify(x, null, 4)
);
