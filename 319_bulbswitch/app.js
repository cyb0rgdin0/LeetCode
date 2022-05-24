/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    let x = [];
    let index = 1;
    let count = 0;
    x = initialize(x, n);

    for (let i = 1; i  <= n; i++) {
        for (let j = i - 1; j < n; j+=i) {
            if (x[j] === 0) {
                x[j] = 1;
                count++;
            }
            else {
                x[j] = 0;
                count--;
            }
        }
    }
    return count;
};

function initialize(x, n) {
    for (let i = 0; i < n; i++) {
        x[i] = 0;
    }
    return x;
}
// console.log(bulbSwitch(1));     // return 1
// console.log(bulbSwitch(2));     // return 2
// console.log(bulbSwitch(4));     // return 2
// console.log(bulbSwitch(5));     // return 2
// console.log(bulbSwitch(8));     // return 2
// console.log(bulbSwitch(9));     // return 3
// console.log(bulbSwitch(14));    // return 3
// console.log(bulbSwitch(16));    // return 4
// console.log(bulbSwitch(25));    // return 5
