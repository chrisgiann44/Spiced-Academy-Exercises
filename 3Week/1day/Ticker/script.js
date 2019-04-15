var left = $("#headlines").offset().left;
var dlinks = $("#dheadlines a");
var links = $("a");
var animIdUp;
var animId;
var leftR = $("#dheadlines").offset().left;

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

function moveRight() {
    leftR++;

    if (
        $("#dheadlines").offset().left + $("#dheadlines").width() >
        $(window).width() + dlinks.eq(-1).width()
    ) {
        console.log(7);
        dlinks.eq(-1).prependTo($("#dheadlines"));
        leftR += 15 + dlinks.eq(-1).width();
        dlinks = $("#dheadlines a");
    }

    $("#dheadlines").css({
        left: leftR + "px"
    });

    animId = requestAnimationFrame(moveRight);
}

$("a").on("mouseover", function(e) {
    if ($("a").hasClass("up")) {
        cancelAnimationFrame(animIdUp);
    } else if (!$("a").hasClass("up")) {
        cancelAnimationFrame(animId);
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
    moveRight();
});

moveLeft();
moveRight();
