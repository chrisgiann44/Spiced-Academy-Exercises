let { readdir, stat } = require("fs");
const { promisify } = require("util");

readdir = promisify(readdir);
stat = promisify(stat);

const path = __dirname + "/fun-with-fs/files";

function logSize(url) {
    return readdir(url, { withFileTypes: true })
        .then(files => {
            let arr = [];
            files.forEach(file => {
                if (file.isFile()) {
                    arr.push(
                        stat(`${url}/${file.name}`).then(stats =>
                            console.log(`${url}/${file.name}: ${stats.size}`)
                        )
                    );
                } else {
                    arr.push(logSize(`${url}/${file.name}`));
                }
            });
            return Promise.all(arr);
        })
        .catch(err => console.log(err));
}

logSize(path).then(() => console.log("DONE"));
