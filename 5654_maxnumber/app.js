/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */

var countBalls = function(lowLimit, highLimit) {
    let x = []
    for (let i = 0; i <= 45; i++) {
        x[i] = 0;
    }
    for (let i = lowLimit; i <= highLimit; i++) {
        let y = i
        let z = 0
        while (y > 0) {
            z = z + (y % 10)
            y = Math.floor(y / 10)
        }
        x[z]++;
    }

    let a = x[0]

    for (let i = 0; i <= 45; i++) {
        if (x[i] > a) {
            a = x[i]
        }
    }
    return a;
};

console.log(countBalls(1,10))
console.log(countBalls(5,15))
console.log(countBalls(19,28))