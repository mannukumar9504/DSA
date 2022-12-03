
/**
 * impletenatation of javascript filter function
 * @param {*} fn 
 * @returns 
 */
Array.prototype.customFilter = function(fn) {
    const filtered = [];
    for(let index = 0;index <this.length; index++) {
        if(fn(this[index])) {
            filtered.push(this[index]);
        }
    }
    return filtered;
}


const data = [1,2,3,4,5];
const filteredData = data.customFilter(function (el) {
    if (el > 2) return el;
  });
  console.log(filteredData);