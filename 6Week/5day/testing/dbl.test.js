const { dbl } = require("./dbl.js");

test("Testing Promises", () => {
    dbl(10).then(val => {
        expect(val).toBe(20);
    });
});

test("Testing Promises", () => {
    dbl("Petros").then(val => {
        expect(val).toBe("Bad Number");
    });
});
