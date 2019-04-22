(function() {
    var currentPlayer = "player1";

    /* ------ switchPlayers---------*/

    function switchPlayers() {
        if (currentPlayer == "player1") {
            $(".movingSlot").addClass("on");
            currentPlayer = "player2";
            $(".pl").removeClass("on");
            $(".pl2").addClass("on");
        } else {
            currentPlayer = "player1";
            $(".pl2").removeClass("on");
            $(".pl1").addClass("on");
            $(".movingSlot").removeClass("on");
        }
    }

    /* ------ ADD EVENT ON CLICK ---------*/

    $(".column").on("click", function(e) {
        /* ------ FIND SHOTS IN COLUMN ---------*/

        var slotsInColumn = $(e.currentTarget).find(".slot");

        /* ------ add shots ---------*/

        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass("player1") &&
                !slotsInColumn.eq(i).hasClass("player2")
            ) {
                slotsInColumn.eq(i).addClass(currentPlayer);
                break;
            }
        }
        /* ------ case column is full ---------*/

        if (i == -1) {
            return;
        }

        /* ------ FIND SHOTS IN COLUMN ---------*/

        var slotsInRow = $(".row" + i);

        /* ------ FIND SHOTS DG ---------*/

        var yYy = i;
        var xXx = $(e.currentTarget).index();

        console.log("yYy " + yYy);
        console.log("xXx: " + xXx);

        /* DIAG LEFT*/
        var slotsDiagLeft = [];

        /* LEFT UP*/

        for (var w = 0; w <= 5; w++) {
            if (xXx - w < 0 || yYy - w < 0) {
                break;
            }
            slotsDiagLeft.push(
                $(".board")
                    .children()
                    .eq(xXx - w)
                    .find(".slot")
                    .eq(yYy - w)
            );
        }

        /* RIGHT DOWN*/
        for (var w = 1; w <= 5; w++) {
            if (xXx + w > 6 || yYy + w > 5) {
                break;
            }
            slotsDiagLeft.unshift(
                $(".board")
                    .children()
                    .eq(xXx + w)
                    .find(".slot")
                    .eq(yYy + w)
            );
        }

        console.log(slotsDiagLeft);

        /* DIAG RIGHT*/

        var slotsDiagRight = [];

        /* RIGHT UP*/
        /* LEFT DOWN*/

        for (var w = 0; w <= 5; w++) {
            if (xXx + w > 6 || yYy - w < 0) {
                break;
            }
            slotsDiagRight.push(
                $(".board")
                    .children()
                    .eq(xXx + w)
                    .find(".slot")
                    .eq(yYy - w)
            );
        }

        for (var w = 1; w <= 5; w++) {
            if (xXx - w < 0 || yYy + w > 5) {
                break;
            }
            slotsDiagRight.unshift(
                $(".board")
                    .children()
                    .eq(xXx - w)
                    .find(".slot")
                    .eq(yYy + w)
            );
        }

        console.log(slotsDiagRight);

        /* ------ checking for checkForVictory ---------*/

        if (checkForVictory(slotsInColumn)) {
            // console.log("WWWWWWIIIIINNNN VERTICAL");
            if (currentPlayer == "player1") {
                $(".winner").addClass("on");
                $(".winneris p").html("And the Winner is: PLAYER 1!!");
            } else {
                $(".winner").addClass("on");
                $(".winneris p").html("And the Winner is: PLAYER 2!!");
            }
            $(".column").off("click");
        } else {
            if (checkForVictory(slotsInRow)) {
                console.log("WWWWWWIIIIINNNN Horintally");
                $(".column").off("click");
            } else {
                if (chVicDg(slotsDiagRight) || chVicDg(slotsDiagLeft)) {
                    console.log("WWWWWWIIIIINNNN DIAGONALLY");
                    $(".column").off("click");
                }
            }
            switchPlayers();
        }
    });

    /* ------ function to check for checkForVictory ---------*/

    function checkForVictory(slot) {
        var count = 0;
        for (var i = 0; i < slot.length; i++) {
            if (slot.eq(i).hasClass(currentPlayer)) {
                count++;
                if (count == 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    /* ------ function to check for checkForVictory DIAGN---------*/

    function chVicDg(slot) {
        var count = 0;
        for (var i = 0; i < slot.length; i++) {
            if (slot[i].hasClass(currentPlayer)) {
                count++;
                if (count == 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    /* ------ Reset Button ---------*/

    $("button").click(function() {
        location.reload();
    });

    $("body").on("mousemove", function(e) {
        $(".movingSlot").css({
            left: e.pageX - 50 + "px",
            top: e.pageY - 50 + "px"
        });
    });

    /* ------ END ---------*/
})();
