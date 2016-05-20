// Constructor Pattern
var City =  function(area, population, name) {
    this.area = area;
    this.population = population;
    this.name = name
  }

City.prototype.toString = function () {
  return this.name + " has a population of " + this.population;
}

module.exports = City;
