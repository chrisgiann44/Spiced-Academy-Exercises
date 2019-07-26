function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

function Square(n) {
    this.width = n;
    this.height = n;
}

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

var square = new Square(4);
console.log(square.getArea);
console.log(square.getArea());

var rect = new Rectangle(4, 5);
console.log(rect.getArea);
console.log(rect.getArea());
