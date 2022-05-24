/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    let x = target.length;
    let count = 0;
    if (target[0] === '1') {
        count++;
    }
    for (let i = 1; i < x; i++) {
        if (target[i] !== target[i - 1]) {
            count++;
        }
    }
    return count;
};

console.log(minFlips("101"));           // return 3
console.log(minFlips("0000"));          // return 0
console.log(minFlips("001011101"));     // return 5
console.log(minFlips("10111"));         // return 3
console.log(minFlips(""))