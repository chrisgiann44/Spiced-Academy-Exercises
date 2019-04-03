var getTotaler = function() {
    var x = 0;
    function sum(num) {
        x += num;
        return x;
    }
    return sum;
};

var fn = getTotaler();
console.log(fn(3));
console.log(fn(6));

// Second form

// function getTotaler() {
//     var total = 0;
//     return function(num) {
//         console.log(total + num);
//         return (total += num);
//     };
// }
