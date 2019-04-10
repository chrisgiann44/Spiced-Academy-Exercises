var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

context.beginPath();
context.lineWidth = 8;
context.lineJoin = "round";
context.moveTo(100, 100);
context.lineTo(400, 100);
context.lineTo(400, 400);
context.lineTo(100, 400);
context.lineTo(100, 100);
context.strokeStyle = "red";
context.stroke();

context.fillStyle = "blue";
context.fill();

context.beginPath();
context.lineWidth = 6;
context.strokeStyle = "purple";
context.arc(100, 100, 24, 0, 2 * Math.PI);
context.stroke();

context.fillStyle = "yellow";
context.fill();

var image = document.getElementById("source");

context.drawImage(image, 150, 50, 150, 150);
