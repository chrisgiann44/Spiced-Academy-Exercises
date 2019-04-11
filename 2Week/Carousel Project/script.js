(function() {
    var mtains = document.getElementsByClassName("mtain");

    var cur = 0;

    setTimeout(carouselmv, 3000);

    document.addEventListener("transitionend", function(e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
        }
    });

    function carouselmv() {
        mtains[cur].classList.remove("onscreen");

        mtains[cur].classList.add("exit");

        cur++;
        if (cur >= mtains.length) {
            cur = 0;
        }

        mtains[cur].classList.add("onscreen");

        setTimeout(carouselmv, 3000);
    }
})();
