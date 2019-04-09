var box = document.getElementById("box");

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

box.addEventListener("mousedown", function() {
    var r = getRandomNumber();
    var g = getRandomNumber();
    var b = getRandomNumber();
    var rColor = "rgb(" + r + "," + g + "," + b + ")";
    box.style.backgroundColor = rColor;
});

box.addEventListener("mouseup", function() {
    var r = getRandomNumber();
    var g = getRandomNumber();
    var b = getRandomNumber();
    var rColor = "rgb(" + r + "," + g + "," + b + ")";
    box.style.backgroundColor = rColor;
});
