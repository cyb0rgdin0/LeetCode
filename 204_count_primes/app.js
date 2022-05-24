/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n < 2) return 0
    let isPrime = []
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i] == true) continue
        count++x
        for (let j = 2; i*j < n; j++) {
            isPrime[i*j] = true
        }
    }
    return count
};

console.log(countPrimes(10))        // return 4
console.log(countPrimes(0))         // return 0
console.log(countPrimes(1))         // return 0