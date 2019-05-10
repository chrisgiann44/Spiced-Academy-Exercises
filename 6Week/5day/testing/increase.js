module.exports.increase = increase;

function increase(n) {
    if (isNaN(n) || n <= 0) {
        return "ERROR";
    }
    do {
        n *= 10;
    } while (n < 1000000);

    return n;
}

console.log(increase(3));
