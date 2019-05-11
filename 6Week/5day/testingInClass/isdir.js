module.exports.isdir = isdir;
const fs = require("fs");

function isdir(path, callback) {
    fs.stat(path, function(err, stats) {
        callback(err, stats.isDirectory());
    });
}

// isdir(__dirname , function(err, data))
