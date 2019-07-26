(function() {
    var nextUrl;

    function ajaxCall(url, data) {
        $.ajax({
            url: url,
            data: data,
            success: function(data) {
                data = data.artists || data.albums;
                nextUrl =
                    data.next &&
                    data.next.replace(
                        "https://api.spotify.com/v1/search",
                        "https://elegant-croissant.glitch.me/spotify"
                    );

                if (nextUrl) {
                    $(".moreResults").css({
                        visibility: "visible"
                    });
                }

                if (!nextUrl) {
                    $(".moreResults").css({
                        visibility: "hidden"
                    });
                }

                var links = [];
                var names = [];
                var images = [];
                var htmlContent = "";

                for (var i = 0; i < data.items.length; i++) {
                    links.push(data.items[i].external_urls["spotify"]);
                    names.push(data.items[i].name);
                    if (data.items[i].images[0] != null) {
                        images.push(data.items[i].images[0].url);
                    } else {
                        images.push("/icon.jpg");
                    }
                }

                for (var z = 0; z < links.length; z++) {
                    htmlContent +=
                        '<div class="result">' +
                        '<img src="' +
                        images[z] +
                        '">' +
                        '<a href="' +
                        links[z] +
                        '">' +
                        names[z] +
                        "</a></div>";
                }
                if ($(".results").html() == null) {
                    $(".results").html(htmlContent);
                } else {
                    $(".results").append(htmlContent);
                }
                checkScroll();
            }
        });
    }

    $(".submit").on("click", function() {
        $(".results").empty();

        $(".moreResults").css({
            visibility: "hidden"
        });

        var userInput = $("input[name='user-input']").val();
        var selection = $(".select").val();

        ajaxCall("https://elegant-croissant.glitch.me/spotify", {
            query: userInput,
            type: selection
        });
    });

    $(".moreResults").on("click", function() {
        ajaxCall(nextUrl, null);
    });

    function checkScroll() {
        // var timer = setTimeout(checkScroll, 1000);
        // clearTimeout(timer);
        var hasReachedBottom =
            $(window).height() + $(window).scrollTop() >=
            $(document).height() - 100;
        console.log(hasReachedBottom);
        if (hasReachedBottom) {
            ajaxCall(nextUrl, null);
        } else {
            setTimeout(checkScroll, 500);
        }
    }
})();
