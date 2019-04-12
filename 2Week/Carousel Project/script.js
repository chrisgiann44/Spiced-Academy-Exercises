(function() {
    var mtains = document.getElementsByClassName("mtain");
    var dots = document.getElementsByClassName("dot");
    var cur = 0;
    var transitioning;
    var timer;

    timer = setTimeout(carousel, 3000);

    document.addEventListener("transitionend", function(e) {
        if (e.target.classList.contains("exit")) {
            timer = setTimeout(carousel, 3000);
            e.target.classList.remove("exit");
        }

        transitioning = false;
    });

    for (var i = 0; i < dots.length; i++) {
        (function(i) {
            dots[i].addEventListener("click", function() {
                if (transitioning) {
                    return;
                } else {
                    clearTimeout(timer);
                    carousel(i);
                }
            });
        })(i);
    }

    function carousel(arg) {
        mtains[cur].classList.remove("onscreen");
        mtains[cur].classList.add("exit");
        dots[cur].classList.remove("on");

        transitioning = true;

        if (arg >= 0) {
            cur = arg;
        } else {
            cur++;
            if (cur >= mtains.length) {
                cur = 0;
            }
        }

        mtains[cur].classList.add("onscreen");
        dots[cur].classList.add("on");
    }
})();
