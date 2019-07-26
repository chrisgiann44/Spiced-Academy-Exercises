(function() {
    $("input").on("input focus", function() {
        $.ajax({
            url: "https://flame-egg.glitch.me/",
            data: {
                q: $("input").val()
            },
            success: function(data) {
                var resultsHtml = "";

                if ($("input").val() == "") {
                    $(".results").hide();
                    return;
                }

                if (data.length == 0) {
                    resultsHtml = "no results";
                } else {
                    for (var i = 0; i < data.length; i++) {
                        resultsHtml +=
                            "<div class='result'>" + data[i] + "</div>";
                    }
                }
                $(".results")
                    .slideDown("slow")
                    .html(resultsHtml);
            }
        });
    });

    // Mouseover

    $(".results").on("mouseover", function(e) {
        for (var i = 0; i < $(".result").length; i++) {
            $(".result")
                .eq(i)
                .removeClass("on");
        }
        e.target.classList.add("on");
    });

    // Mousedown

    $(".results").on("mousedown", function(e) {
        $("input").val(e.target.innerHTML);
        $(".results").hide();
    });

    // Keydown

    $("input").on("keydown", function(e) {
        if (e.keyCode == 40 /*keydown*/) {
            if (!$(".on").length) {
                $(".result")
                    .eq(0)
                    .addClass("on");
            } else {
                $(".on")
                    .removeClass("on")
                    .next()
                    .addClass("on");
            }
        } else if (e.keyCode == 38 /*keyup*/) {
            if (!$(".on").length) {
                $(".result")
                    .eq(-1)
                    .addClass("on");
            } else {
                $(".on")
                    .removeClass("on")
                    .prev()
                    .addClass("on");
            }
        } else if (e.keyCode == 13 /*enter*/) {
            if ($(".on").length) {
                e.target.value = $(".on").text();
                $(".result").hide();
            }
        } else {
            return;
        }
    });

    $("input").on("blur", function() {
        $(".results").hide();
    });

    $("input").mouseover(function() {
        $("input").css({ background: "grey" });
        $("input").addClass("on");
    });

    $("input").mouseleave(function() {
        $("input").css({ background: "" });
        $("input").removeClass("on");
    });
})();
