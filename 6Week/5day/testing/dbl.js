module.exports.dbl = dbl;

function dbl(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(n)) {
                reject(new Error("Bad Number"));
            } else {
                resolve(n * 2);
            }
        }, 200);
    });
}
