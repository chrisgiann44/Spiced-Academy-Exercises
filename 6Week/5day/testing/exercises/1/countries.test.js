const countries = require("./countries");

test("When find is passed an empty string, it returns an empty array", () => {
    expect(countries.find("")).toEqual([]);
});

test("The array that it returns contains no more than four matches", () => {
    expect(countries.find("a").length).toBe(4);
});

test("The array that it returns contains no more than four matches", () => {
    expect(countries.find("A").length).toBe(4);
});

test("The array that it returns contains no more than four matches", () => {
    expect(countries.find("Aaaaaaaaa")).toEqual([]);
});
