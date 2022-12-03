const shiftZeroEnd = (arr, n) => {
    let count = 0;
    for(let i = 0; i<n ;i++) 
    if(arr[i] !== 0)
    arr[count++] = arr[i];

    while(count < n)
    arr[count++] = 0;
}
//input array;
let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];

let n = arr.length;
shiftZeroEnd(arr,n);
console.log(arr);

//output array  [ 1, 9, 8, 4, 2, 7, 6, 9, 0, 0,0, 0 ]