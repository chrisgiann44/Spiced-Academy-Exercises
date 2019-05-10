const { isdir } = require("./isdir.js");

test("Petros3", () => {
    isdir(__dirname, function(err, data) {
        expect(data).toBe(true);
    });
});
