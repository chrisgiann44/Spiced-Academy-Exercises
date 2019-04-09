var headlines = document.getElementById("headlines");
var links = headlines.getElementsByTagName("a");
var left = headlines.offsetLeft;
var animId;

function move() {
    left--;

    if (left <= -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlines.appendChild(links[0]);
    }

    headlines.style.left = left + "px";

    animId = requestAnimationFrame(move);
}
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", function(evt) {
        cancelAnimationFrame(animId);
        evt.target.style.textDecoration = "underline";
        evt.target.style.fontWeight = "bold";
    });

    links[i].addEventListener("mouseout", function(evt) {
        evt.target.style.textDecoration = "none";
        evt.target.style.fontWeight = "normal";
        move();
    });
}
move();
