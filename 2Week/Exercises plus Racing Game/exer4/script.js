var bbox = document.getElementById("bbox");
var sbox = document.getElementById("sbox");

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

bbox.addEventListener("click", function() {
    var r = getRandomNumber();
    var g = getRandomNumber();
    var b = getRandomNumber();
    var rColor = "rgb(" + r + "," + g + "," + b + ")";
    bbox.style.backgroundColor = rColor;
});

sbox.addEventListener("click", function(e) {
    var r = getRandomNumber();
    var g = getRandomNumber();
    var b = getRandomNumber();
    var rColor = "rgb(" + r + "," + g + "," + b + ")";
    sbox.style.backgroundColor = rColor;
    e.stopPropagation();
});
