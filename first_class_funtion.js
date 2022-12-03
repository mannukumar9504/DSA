function add(x){
    let y =0;
    return function(y){
      if(typeof y !== 'undefined') {
      x= x+y;
      return arguments.callee
      } else {
        return x;
      }
    }
  }
  
  console.log(add(1)(2)(3)());//true
  console.log(add(1)(2)(3)(4)());//true