(function() {
    var left;
    $(".bar").on("mousedown", function() {
        $(".container").on("mousemove", function(e) {
            left = e.pageX;
            $(".bar").css({
                left: left - 7.5 + "px"
            });
            $(".top").css({
                width: left + "px"
            });
        });

        console.log(left);
    });

    $(".bar").on("mouseup", function() {
        $(".container").off();
    });
})();
