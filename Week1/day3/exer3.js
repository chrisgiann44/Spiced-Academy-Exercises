function mil(n) {
    if (n <= 0 || isNaN(n)) {
        return "ERROR";
    } else if (n >= 1000000) {
        return n;
    } else {
        for (; n < 1000000; n *= 10) {}
        return n;
    }
}

console.log(mil(98));
