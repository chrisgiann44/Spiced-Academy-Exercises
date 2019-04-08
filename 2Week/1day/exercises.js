// ---Exer #1 ------/////
function fn(str) {
    var elem = document.querySelectorAll(str);
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.fontStyle = "italic";
        elem[i].style.fontWeight = "bold";
        elem[i].style.textDecoration = "underlined";
    }
}

fn("#container");

// ---Exer #2 ------/////

function fn2(str) {
    var arr = [];
    var elem = document.getElementsByClassName(str);
    for (var i = 0; i < elem.length; i++) {
        arr.push(elem[i]);
    }
    return arr;
}

fn2("#container");

// ---Exer #3 ------/////

function fn3() {
    var newDiv = document.createElement("div");
    var text = document.createTextNode("Awesome");
    newDiv.appendChild(text);
    newDiv.style.position = "fixed";
    newDiv.style.zIndex = "2147483647";
    newDiv.style.left = "20px";
    newDiv.style.top = "100px";
    newDiv.style.fontSize = "200px";
}

fn3();
