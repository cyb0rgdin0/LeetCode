/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let x = 0;
    while (x * x <= c) {
        let y = 0;
        while (y * y <= c) {
            if (x * x + y * y == c) {
                return true;
            }
            y++
        }
        x++;
    }
    return false;
};