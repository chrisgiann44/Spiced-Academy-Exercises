(function() {
    // $("div").css({
    //     border: "3px solid yellow"
    // });
    //
    // $("<hi>Petros Nikos</h1>")
    //     .css({
    //         color: "red",
    //         "font-family": "Helvetica Neue",
    //         "font-size": "100px"
    //     })
    //     .appendTo("body");

    // $("<h1>Petros Nikos</h1>")
    //     .addClass("header")
    //     .appendTo("body");
    //
    // $("h1").html("something");

    $(".sky").on("mousedown", function(e) {
        $(e.target).css({
            background: "red"
        });
    });

    $(".sky").on("mouseup", function(e) {
        console.log(e.target);
        $(e.target).css({
            background: "#05cdff"
        });
    });
})();
