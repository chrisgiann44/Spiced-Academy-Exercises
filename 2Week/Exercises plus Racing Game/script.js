console.log(3);

var board = document.getElementById("board");
var racers = document.getElementsByClassName("racer");

var racingCarLeft = 0;
var motorBikeLeft = 0;
var policeCarLeft = 0;
var tractorLeft = 0;

function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

board.addEventListener("click", function() {
    racingCarLeft += getRandomNumber(21);
    motorBikeLeft += getRandomNumber(21);
    policeCarLeft += getRandomNumber(21);
    tractorLeft += getRandomNumber(21);
    racers[0].style.left = racingCarLeft + "px";
    racers[1].style.left = motorBikeLeft + "px";
    racers[2].style.left = policeCarLeft + "px";
    racers[3].style.left = tractorLeft + "px";
});

var boostbtn = document.getElementById("boost-button");

boostbtn.addEventListener("click", function(evt) {
    evt.stopPropagation();
    racingCarLeft += 100;
    racers[0].style.left = racingCarLeft + "px";
});

document.addEventListener("keydown", function(e) {
    console.log(e);
    if (e.keyCode === 82) {
        var r = getRandomNumber(256);
        var g = getRandomNumber(256);
        var b = getRandomNumber(256);
        var rColor = "rgb(" + r + "," + g + "," + b + ")";
        board.style.backgroundColor = rColor;
    }
});
