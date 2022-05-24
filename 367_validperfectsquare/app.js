/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for (let i = 0; num; i++) {
        if (i*i < num) {
            continue
        } else if (i*i === num) {
            return true;
        } else {
            return false;
        }
    }
};

// constraints: 1 <= num <= 2^31 - 1

console.log(35);
console.log(100);
console.log(4);