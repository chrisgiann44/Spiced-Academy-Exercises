(function() {
    function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error("Bad number");
    }

    var germNumbers = [
        "eins",
        "zwei",
        "drei",
        "vier",
        "fünf",
        "sechs",
        "sieben",
        "acht",
        "neun",
        "zehn"
    ];

    translateNumberToGerman();

    function translateNumberToGerman() {
        try {
            var num = askForNumber();
            console.log(germNumbers[num - 1]);
            return germNumbers[num - 1];
        } catch (e) {
            console.log(e);
            return translateNumberToGerman();
        }
    }
})();
