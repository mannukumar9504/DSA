Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
      this[i] = callback(this[i]);
    }
  };
  
  function callback(element) {
    return (element+2); //insert logic
  }
  
  var array = [2, 4, 6, 8, 10];
  array.myForEach(callback);
  console.log(array);