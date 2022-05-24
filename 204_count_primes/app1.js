
// First attempt to solve problem
// Time limit exceeded

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0
    for (let i = 0; i < n; i++) {
        if (isPrime(i) == true) {
            count++
        }
    }
    return count
};

function isPrime(n) {
    if (n < 2) {
        return false
    }
    let count = 0
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++
        }
    }
    return count == 2 ? true : false
}

console.log(countPrimes(10))        // return 4
console.log(countPrimes(0))         // return 0
console.log(countPrimes(1))         // return 0