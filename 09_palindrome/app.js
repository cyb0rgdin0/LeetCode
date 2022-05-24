// PALINDROME NUMBER

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var rev = 0, digit = 0;
    var temp = x;

    if (x === 0) {
        return true;
    } else if (x < 0) {
        return false;
    }
    while (x != 0) {
        digit = x % 10;
        if (x > 0) {
            x =  Math.floor(x/10);
        } else if (x < 0) {
            x = Math.ceil(x/10);
        }
        rev = rev * 10 + digit;
        console.log(`Digit is ${digit}`);
        console.log(`Rev is ${rev}`);
    }
    if(temp === rev) {
        return true;
    } else {
        return false;   
    }
};

console.log(isPalindrome(121))