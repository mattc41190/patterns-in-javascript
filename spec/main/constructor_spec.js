var City = require('../../patterns/general/creational/constructor.js');

describe('A City Constructor', function(){

  it('should be able to make a city', function(){
    var rome = new City('3 miles', 10000, "Rome");
    expect(rome.name).toBe('Rome');
  });

  it("can print details about itself", function() {
    var denver = new City('26 miles', 2000000, "Denver");
    expect(denver.toString()).toEqual("Denver has a population of 2000000");
  });

  it("doesn't print incorrect data about itself", function() {
    var denver = new City('24 miles', 3000000, "Dallas");
    expect(denver.toString()).not.toEqual("Dumb string");
  });

});
