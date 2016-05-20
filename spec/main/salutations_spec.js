var Salutations = require('../../models/salutations.js');

describe("Some salutations", function() {
  it("can say 'Hello'", function() {
    expect(Salutations.greet("Matt")).toEqual("Hello Matt");
  });

  it("can tell who you are saying hello to", function() {
    expect(Salutations.greet("Brian")).not.toEqual("Hello Matt");
  });
});
