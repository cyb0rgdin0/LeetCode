/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    if (amount = 0) {
        return 0
    }
    
    if (coins.length == 0) {
        return -1
    }
    
    for (let i = coins.length-1; i >= 0; i--) {
        if (coins[i] > amount) {
            coins.splice(i,1)
        }
    }
    if (coins.length == 0) {
        return -1
    }
    
    let count = 0
    for (let i = coins.length-1; i>=0; i--) {
        if (coins[i] % 2 == 0) {
            count++
        }
    }
    if (count > 0 && amount % 2 == 1) {
        return -1
    }

    console.log(coins)
};

let coins = [2,4,5]
let amount = 4
coinChange(coins,amount)
