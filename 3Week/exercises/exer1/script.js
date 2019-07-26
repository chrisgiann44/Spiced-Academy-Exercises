(function() {
    $("button").click(function() {
        $(".resultIn").empty();
        $(".result").empty();
        try {
            JSON.parse($("textarea").val());
            $("body").append("<div class='result'>Valid JSON</div>");
            $(".result").css({
                color: "green",
                marginTop: 20 + "px",
                fontSize: 30 + "px"
            });
        } catch (e) {
            $("body").append("<div class='resultIn'>Invalid JSON</div>");
            $(".resultIn").css({
                color: "red",
                marginTop: 20 + "px",
                fontSize: 30 + "px"
            });
        }
    });
})();
