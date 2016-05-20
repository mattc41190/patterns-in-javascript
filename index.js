var Salutations = require('./models/salutations.js');
var xCar = require('./models/car.js');

aGreeting = Salutations.greet('Matt');
console.log(aGreeting)


var civic = new xCar('Honda Civic', 2009, 20000);
console.log(civic.toString());
