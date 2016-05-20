var Salutations = function(){

}

Salutations.prototype.greet = function(name) {
  return 'Hello ' +  name;
}

Salutations.prototype.farewell = function(name){
  return 'Goodybe ' +  name;
}

module.exports = new Salutations();
