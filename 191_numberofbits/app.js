/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0
    while (n != 0) {
        console.log(n);
        count ++;
        n &= (n-1);
    }
    return count;
};

console.log(hammingWeight(00000000000000000000000000001011));               // return 3