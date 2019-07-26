(function() {
    $("#hmenu").on("click", function() {
        $("#sidebar").addClass("on");
        $("#overlay").addClass("on");
    });

    $("#pe").on("click", function() {
        $("#sidebar").removeClass("on");
        $("#overlay").removeClass("on");
    });

    $("#overlay").on("click", function() {
        $("#sidebar").removeClass("on");
        if (!$(".modal").hasClass("st")) {
            $("#overlay").removeClass("on");
        }
    });

    $("#ke").on("click", function(e) {
        e.stopPropagation();
        $(".modal").removeClass("st");
        $("#overlay").removeClass("on");
    });

    function modal() {
        setTimeout(function() {
            $("#overlay").addClass("on");
            $(".modal").addClass("st");
        }, 1000);
    }

    modal();
})();
