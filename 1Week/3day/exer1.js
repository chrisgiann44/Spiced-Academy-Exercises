function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1, 8));
console.log(sum(121, 2348, 545, 4545, 4545, 4545, 45));
