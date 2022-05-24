/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    if (n == 0) {
        return 0;
    } else if (n <= 2) {
        return 1;
    }
    let x = [0,1,1];
    let y = 1;
    for (let i = 3; i <= n; i++) {
        if (i % 2 == 0) {
            x[i] = x[i/2];
        } else {
            x[i] = x[(i-1)/2] + x[(i-1)/2+1];
        }
        if (x[i] > y) {
            y = x[i];
        }
    }
    return y;
};

console.log(getMaximumGenerated(7));
console.log(getMaximumGenerated(2));
console.log(getMaximumGenerated(3));