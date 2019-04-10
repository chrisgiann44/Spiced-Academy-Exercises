(function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var canvasBig = document.getElementById("canvasBig");
    var contextBig = canvasBig.getContext("2d");

    context.beginPath();
    context.lineWidth = 5;
    context.arc(100, 40, 20, 0, 2 * Math.PI);
    context.stroke();

    context.fillStyle = "orange";
    context.fill();

    context.beginPath();
    context.lineWidth = 2.5;
    context.moveTo(100, 60);
    context.lineTo(100, 140);
    context.stroke();

    context.beginPath();
    context.lineWidth = 2.5;
    context.moveTo(100, 76);
    context.lineTo(60, 56);
    context.stroke();

    context.beginPath();
    context.lineWidth = 2.5;
    context.moveTo(100, 76);
    context.lineTo(140, 52);
    context.stroke();

    context.beginPath();
    context.lineWidth = 2.5;
    context.moveTo(100, 140);
    context.lineTo(60, 162);
    context.stroke();

    context.beginPath();
    context.lineWidth = 2.5;
    context.moveTo(100, 140);
    context.lineTo(140, 162);
    context.stroke();

    var left = 0;
    var top = 0;
    var clicks = 0;

    function fn() {
        if (clicks < 10 && clicks > 0) {
            var newDiv = document.createElement("div");
            newDiv.style.position = "fixed";
            newDiv.id = "newDiv";
            newDiv.style.top = "40%";
            newDiv.style.fontSize = "94px";
            newDiv.style.width = "100%";
            newDiv.style.height = "30%";
            newDiv.style.color = "red";
            var newContent = document.createTextNode(
                "Hey mate, Please Use Arrows!!!!!!!!!!"
            );
            document.body.appendChild(newDiv);
            newDiv.appendChild(newContent);
            setTimeout(function() {
                newDiv.style.display = "none";
            }, 3000);
            setTimeout(function() {
                newDiv.style.color = "blue";
            }, 1000);
        }
    }

    contextBig.drawImage(canvas, left, top);

    document.addEventListener("keydown", function(evt) {
        contextBig.clearRect(0, 0, canvasBig.width, canvasBig.height);
        if (evt.keyCode == 37) {
            left--;
        } else if (evt.keyCode == 38) {
            top--;
        } else if (evt.keyCode == 39) {
            left++;
        } else if (evt.keyCode == 40) {
            top++;
        } else {
            clicks++;
            fn();
        }
        contextBig.drawImage(canvas, left, top);
    });
})();
