var Car = require('../../patterns/general/creational/constructor.js');

describe('Car objects', function(){
  it('should be able to make a Car', function(){
    var ram = new Car('Dodge Ram', 1999, 200000);
    expect(ram.model).toBe('Dodge Ram');
  });

  it("can print details about itself", function() {
    var ram = new Car('Dodge Ram', 1999, 200000);
    expect(ram.toString()).toEqual("Hello Matt");
  });
  //
  // it("can tell who you are saying hello to", function() {
  //   expect(Salutations.greet("Brian")).not.toEqual("Hello Matt");
  // });

});
