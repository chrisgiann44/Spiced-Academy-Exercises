var button = document.getElementById("btn");
var bckc = document.querySelector("body").style.backgroundColor;

button.addEventListener("click", function() {
    console.log("clicked");
    bckc = "black";
    // if ()
});

document.addEventListener("keydown", function(evt) {
    // console.log("keydown");
    // console.log(evt);
    if (evt.Keycode === 78) {
        console.log("n was pressed");
        document.querySelector("body").style.backgroundColor = "yellow";
    }
});
