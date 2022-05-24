/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let n = arr.length;
    if (n < 1) {
        return 0;
    }
    if (n < 2) {
        return arr[0];
    }
    let sub_size = 1;
    let sum = 0;
    while (sub_size <= n) {
        let start = 0;
        let end = start + sub_size;
        while (end <= n) {
            for (let i = start; i < end; i++) {
                sum+=arr[i];
            }
            start++;
            end++
        }
        sub_size += 2;
        console.log(sum);
    }
    return sum;
};

console.log(sumOddLengthSubarrays([1,4,2,5,3]));