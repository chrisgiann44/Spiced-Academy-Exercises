var headlines = document.getElementById("headlines");
var links = headlines.getElementsByTagName("a");
var left = headlines.offsetLeft;

function move() {
    left--;

    if (left <= -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlines.appendChild(links[0]);
    }

    headlines.style.left = left + "px";

    requestAnimationFrame(move);
}

move();
