/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    if (c >= 0 && c <= 2) return true;

    for(let i = 0, j = Math.floor(Math.sqrt(c)); i <= j; ) {
        let x = i*i + j*j;
        if (x < c) {
            i++;
        } else  if (x > c) {
            j--
        } else {
            return true;
        }
    }
    return false;
};