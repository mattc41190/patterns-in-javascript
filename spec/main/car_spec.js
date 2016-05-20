var Car = require('../../models/car.js');

describe('Car objects', function(){
  it('should be able to make a Car', function(){
    var ram = new Car('Dodge Ram', 1999, 200000);
    expect(ram.model).toBe('Dodge Ram');
  })
});
