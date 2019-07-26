(function() {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    //////////////////////////////////////////////////////
    ////////////// DO NOT TOUCH ABOVE/////////////////////
    //////////////////////////////////////////////////////

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

                for (var i = 0; i < data.items.length; i++) {
                    if (!data.items[i].images[0]) {
                        data.items[i].images.push({ url: "icon.jpg" });
                    }
                }

                console.log(data.items);

                if ($(".results").html() == null) {
                    $(".results").html(
                        Handlebars.templates.card({ myData: data.items })
                    );
                } else {
                    $(".results").append(
                        Handlebars.templates.card({ myData: data.items })
                    );
                }

                // $("h1").slideDown();

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
        var hasReachedBottom =
            $(window).height() + $(window).scrollTop() >=
            $(document).height() - 100;
        console.log(hasReachedBottom);
        if (hasReachedBottom) {
            ajaxCall(nextUrl, null);
        } else {
            setTimeout(checkScroll, 1000);
        }
    }
})();
