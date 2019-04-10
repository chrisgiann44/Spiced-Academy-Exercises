(function() {
    "use strict";
    var hmenu = document.getElementById("hmenu");
    var xclose = document.getElementById("pe");
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");

    hmenu.addEventListener("click", function() {
        sidebar.classList.add("on");
        overlay.classList.add("on");
    });

    xclose.addEventListener("click", function() {
        sidebar.classList.remove("on");
        document.body.classList.remove("on");
        overlay.classList.remove("on");
    });

    overlay.addEventListener("click", function() {
        sidebar.classList.remove("on");
        document.body.classList.remove("on");
        overlay.classList.remove("on");
    });
})();
