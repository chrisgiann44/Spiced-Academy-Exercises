(function() {
    // Variables used

    var input = $("input");
    var countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Angola",
        "Anguilla",
        "Antigua",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bonaire (Netherlands Antilles)",
        "Bosnia Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Congo, The Democratic Republic of",
        "Cook Islands",
        "Costa Rica",
        "Croatia",
        "Curacao (Netherlands Antilles)",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iraq",
        "Ireland (Republic of)",
        "Israel",
        "Italy",
        "Ivory Coast",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kosovo",
        "Kosrae Island",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia (FYROM)",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Moldova",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Nepal",
        "Netherlands",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Northern Mariana Islands",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Ponape",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Rota",
        "Russia",
        "Rwanda",
        "Saba (Netherlands Antilles)",
        "Saipan",
        "Samoa",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "South Africa",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "St. Barthelemy",
        "St. Croix",
        "St. Eustatius (Netherlands Antilles)",
        "St. John",
        "St. Kitts and Nevis",
        "St. Lucia",
        "St. Maarten (Netherlands Antilles)",
        "St. Thomas",
        "St. Vincent and the Grenadines",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Tinian",
        "Togo",
        "Tonga",
        "Tortola",
        "Trinidad and Tobago",
        "Truk",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos",
        "Tuvalu",
        "US Virgin Islands",
        "Uganda",
        "Ukraine",
        "Union Island",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Vietnam",
        "Virgin Gorda",
        "Wallis and Futuna",
        "Yap",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ];
    var results = $(".results");

    //Code

    input.on("input focus", function() {
        var resultsHtml = "";
        var val = input.val();
        var matches = [];

        if (val == "") {
            results.hide();
            return;
        }

        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().startsWith(val.toLowerCase())) {
                matches.push(countries[i]);
                if (matches.length == 4) {
                    break;
                }
            }
        }

        if (matches.length == 0) {
            resultsHtml = "no results";
        } else {
            for (var z = 0; z < matches.length; z++) {
                resultsHtml += "<div class='result'>" + matches[z] + "</div>";
            }
        }

        results.show().html(resultsHtml);
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
        input.val(e.target.innerHTML);
        results.hide();
    });

    // Keydown

    $("input").on("keydown", function(e) {
        // console.log(!$(".on").length);
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

    input.on("blur", function() {
        results.hide();
    });
})();
