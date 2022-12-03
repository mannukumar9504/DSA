/**
 * code for .map function logic
 * @param {*} callback 
 * @returns 
 */
Array.prototype.mymap = function(callback) {
    const result = [];
    for(let index = 0; index<this.length;index++) {
       result.push( callback(this[index], index, this));
    }
    return result;
}
//to test custom map
let array = [5,6,7,8]
console.log(array.mymap(item => 1+item));