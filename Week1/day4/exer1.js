function each(obj, fn) {
    if (typeof obj == "object") {
        for (var prop in obj) {
            fn(obj[prop], prop);
        }
    } else {
        console.log("I need an object!");
    }
}

each(
    {
        a: 1,
        b: 2
    },
    function(val, name) {
        console.log("The value of " + name + " is " + val);
    }
);

each(["a", "b"], function(val, idx) {
    console.log("The value of item " + idx + " is " + val);
});

each(3, 3);
