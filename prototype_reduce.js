//sum of all the array item using custom .reduce function.
var a = [120, 21, 13, 56];

function add(a, b) {
  return a + b;
}

Array.prototype.reduce2 = function(fn, start){
  var result = start !== undefined ? start : this[0];
  
  for (var i = result === this[0] ? 1 : 0; i < this.length; i++) {
    result = fn(result, this[i]);
  }
  return result;
};
console.log(a.reduce2(add));