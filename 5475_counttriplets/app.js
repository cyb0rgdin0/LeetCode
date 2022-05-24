/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let x = arr.length;
    let count = 0;
    for (let i = 0; i < x; i++) {
        for (let j = i + 1; j < x; j++) {
            if (j >= x) break;
            for (let k = j + 1; j < x; k++) {
                if (k >= x) break;
                if (Math.abs(arr[i] - arr[j]) <= a &&
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c) {
                    count++;
                }
            }   
        }
    }
    return count;
};

let arr = [3,0,1,1,9,7];
let a = 7, b = 2, c = 3;
console.log(countGoodTriplets(arr,a,b,c));
console.log(countGoodTriplets([1,1,2,2,3],0,0,1));
