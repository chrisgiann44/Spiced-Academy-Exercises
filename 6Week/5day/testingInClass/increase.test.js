const { increase } = require("./increase.js");

test("Petros", () => {
    expect(increase(3)).toBe(3000000);
});

test("Petros2", () => {
    expect(increase(-3)).toBe("ERROR");
});
