// Exercise 1

function logType(val) {
    if (typeof val == "undefined") {
        console.log("undefined!");
    } else if (val == null) {
        console.log("null!");
    } else if (typeof val == "number") {
        if (isNaN(val)) {
            console.log("not a number!");
        } else {
            console.log("number!");
        }
    } else if (typeof val == "string") {
        console.log("string!");
    } else if (typeof val == "boolean") {
        console.log("boolean!");
    } else if (typeof val == "function") {
        console.log("function!");
    } else if (typeof val == "object") {
        if (Array.isArray(val)) {
            console.log("array!");
        } else {
            console.log("object!");
        }
    } else {
        console.log("I have no idea!");
    }
}

logType();

// Exercise 2

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA"
};

var b = {};

for (var p in a) {
    b[a[p]] = p;
}

console.log(b);

// // Exercise 3

var i = 10;
while (i > 0) {
    console.log(i);
    i--;
}
