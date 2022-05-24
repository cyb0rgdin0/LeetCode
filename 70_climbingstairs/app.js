/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++) {
        let total = first + second;
        first = second;
        second = total;
    }
    return second;
};

var climb_Stairs = function(n) {
    if (n < 1) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    }
    return climbStairs(n-1) + climbStairs(n-2);
}

console.log(climbStairs(45));
console.log(climb_Stairs(45));