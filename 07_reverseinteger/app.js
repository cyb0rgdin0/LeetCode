// REVERSE INTEGER

/**
 * @param {number} x
 * @return {number}
 */

const max = 2147483647;
const min = -2147483648;

var reverse = function(x) {
    var rev = 0, digit = 0;
    
    if (x === 0) {
        return 0;
    }
    
    while (x != 0) {
        digit = x % 10;
        if (x > 0) {
            x =  Math.floor(x/10);
        } else if (x < 0) {
            x = Math.ceil(x/10);
        }
        rev = rev * 10 + digit;
    }
    if(rev > max) {
        return 0;
    } else if (rev < min) {
        return 0;
    } else {
        return rev;
    }
};

console.log(69285);
console.log(65536);
console.log(2147483647);