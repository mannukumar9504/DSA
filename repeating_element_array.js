let array = [1,2,3,5,6,3,4];
let n = array.length;

const find_repeating_element = (arr) => {
    //phase 1
    var slow = arr[0], fast = arr[0];
    do {

        slow = arr[slow];
        fast= arr[arr[fast]];

    } while(slow != fast)
    //phase2
    slow = arr[0];
    while(slow != fast) {
        slow = arr[slow];
        fast = arr[fast];
    }
    return slow;
}
console.log("result==>",find_repeating_element(array));