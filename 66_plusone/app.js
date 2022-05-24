// PLUS ONE

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var x = digits.length ;
    digits[x-1]++;
    if (digits.length > 1) {
        for (let i = x-1; i > 0; i--) {
            if (digits[i] <= 9) {
                break;
            } else if (digits[i] == 10) {
                digits[i] -= 10;
                digits[i-1] += 1;
            }
        }
    }
    if (digits[0] == 10) {
        digits[0] -= 10;
        digits.unshift(1);
    }
    return digits;
};