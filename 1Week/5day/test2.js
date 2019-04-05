function Actor(n, a, o) {
    Person.call(this, n, a);
    this.oscars = o;
}

function Person(z, h) {
    this.age = z;
    this.name = h;
    this.hasHair = true;
    // function functionName() {}
}

Person.prototype.sleep = function() {
    console.log("zzzzzz");
};

Actor.prototype = Object.create(Person.prototype);
Actor.prototype.constructor = Actor;

Actor.prototype.act = function() {
    console.log("To be or not to be, that is the question!");
};

Actor.prototype.acceptOscar = function() {
    console.log("I promised myself I wasn't going to cry");
};

var leo = new Actor("Leonardo", 44, 1);

var jlaw = new Actor("Jennifer", 29, 1);

var joeSchmo = new Person("Joe", 56);

leo.sleep();

console.log(leo.hasHair);
