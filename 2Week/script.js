(function() {
    // document obj has 5 methods to be called
    // or reached
    // // #1: get ElementById
    // var circle = document.getElementById("circle");
    // console.log(circle);
    //
    // // #2:
    // var circleTwo = document.querySelector(".box");
    // console.log(circleTwo);
    //
    // // #3: returns an array with all the elements with this
    // // class.
    // var boxes = document.getElementsByClassName("box");
    // console.log(boxes);
    //
    // // #4: getElementsByTagName
    // var divs = document.getElementsByTagName("div");
    // console.log(divs);
    //
    // // #5: querySelectorAll
    // var children = document.querySelectorAll("#container");
    // console.log(children);
    //
    // circle.style.background = "orange";
    // circle.style.borderRadius = "10%";
    //
    // for (var i = 0; i < boxes.length; i++) {
    //     boxes[i].style.background = " chocolate";
    // }
    //
    // var myNewDiv = document.createElement("div");
    var text = document.createTextNode("MOnday morning");
    //
    // myNewDiv.appendChild(text);
    //
    // boxes[0].appendChild(myNewDiv);

    var cont = document.querySelector("#container");
    console.log(cont);

    cont.insertBefore(text);
})();
