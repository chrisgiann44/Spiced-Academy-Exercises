function Country(name) {
    this.name = name;
}

Country.prototype.size = "34 sqm";

var gr = new Country("Greece");

console.log(gr.constructor);
console.log(Country.prototype);
