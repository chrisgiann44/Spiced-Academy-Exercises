var x = 432;
var xx;

function timesTwo(n) {
    return n * 2;
}

var xx = timesTwo(x);

var numbers = [x, xx];

function fn() {
    var x = numbers;
    for (var i = 0; i < x.length; i++) {
        console.log(x[i]);
    }
}

numbers = {};

numbers.y = xx;
