(function() {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    //////////////////////////////////////////////////////
    /////////////// DO NOT TOUCH ABOVE////////////////////
    //////////////////////////////////////////////////////

    $(".submit").on("click", function() {
        var username = $("input[name='username']").val();
        var password = $("input[name='password']").val();
        var targetuser = $("input[name='targetuser']").val();
        var rootUrl = "https://api.github.com";
        var endpoint = "/users/" + targetuser + "/repos";

        $(".cards")
            .empty()
            .css(
                {
                    width: "10%",
                    marginLeft: "30%"
                },
                1
            );

        setTimeout(
            $(".cards").animate(
                {
                    width: "100%",
                    marginLeft: "0%"
                },
                2000
            ),
            2000
        );

        $.ajax({
            url: rootUrl + endpoint,
            headers: {
                Authorization: "Basic " + btoa(username + ":" + password)
            },
            success: function(data) {
                var repos = [];
                for (var i = 0; i < data.length; i++) {
                    repos.push(data[i]["name"]);
                }

                $("h2").html("Results for: " + targetuser);
                $(".cards").html(Handlebars.templates.cards({ myData: data }));
                $(".commits").hide();
                for (let z = 0; z < data.length; z++) {
                    $(".card")[z].addEventListener("click", function() {
                        if (
                            $(".commits")
                                .eq(z)
                                .children().length
                        ) {
                            if (
                                $(".commits")
                                    .eq(z)
                                    .is(":visible")
                            ) {
                                $(".commits")
                                    .eq(z)
                                    .hide();
                            } else {
                                $(".commits")
                                    .eq(z)
                                    .show();
                            }
                        } else {
                            $(".commits")
                                .eq(z)
                                .show();
                            var endpointCommits =
                                "/repos/" +
                                targetuser +
                                "/" +
                                repos[z] +
                                "/commits";
                            $.ajax({
                                url: rootUrl + endpointCommits,
                                headers: {
                                    Authorization:
                                        "Basic " +
                                        btoa(username + ":" + password)
                                },
                                success: function(pay) {
                                    var payFive = pay.slice(0, 6);
                                    $(".section")
                                        .eq(z)
                                        .children(".commits")
                                        .html(
                                            Handlebars.templates.commits({
                                                comData: payFive
                                            })
                                        );
                                }
                            });
                        }
                    });
                }
            }
        });
    });
})();
