var left = $("#headlines").offset().left;
var links = $("a");
var animIdUp;

function moveLeft() {
    left--;

    if (left < -links.eq(0).width()) {
        links.eq(0).appendTo($("#headlines"));
        left += 15 + links.eq(0).width();
        links = $("a");
    }

    $("#headlines").css({
        left: left + "px"
    });

    animIdUp = requestAnimationFrame(moveLeft);
}

$("a").on("mouseover", function(e) {
    if ($("a").hasClass("up")) {
        cancelAnimationFrame(animIdUp);
    }

    $(e.target).css({
        textDecoration: "underline",
        fontWeight: "bold"
    });
});

$("a").on("mouseout", function(e) {
    $(e.target).css({
        textDecoration: "none",
        fontWeight: "normal"
    });

    moveLeft();
});

moveLeft();
