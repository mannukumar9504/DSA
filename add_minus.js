Number.prototype.plus = function(b) {
    console.log(this);
    return this + b;
  }
  
  Number.prototype.minus = function(b) {
    return this - b;
  }
  
  var a = (5).plus(3).minus(6); // 2
  
  console.log(a);