/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) {
        return num;
    }
    
    let final = num;                  // final variable
    let x = 0;
    while (final >= 10) {
        x += (num % 10);
        num = Math.floor(num/10);
        if (num == 0) {
            final = x;
            num = x;
            x = 0;
        }
    }
    return final;
};

console.log(addDigits(38));     // return 2
console.log(addDigits(2));      // return 2