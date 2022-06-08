/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */

 var numWaterBottles = function(numBottles, numExchange) {
    var maximum = 0;
    var empty = 0;
    while (true) {
        maximum+=numBottles;            // adding the number of full water bottles drank
        empty+=numBottles;          // setting empty equal to leftover bottles after drinking
        numBottles = Math.floor(empty/numExchange);     // exchanging empty bottles into full bottles
        if (empty < numExchange) {
            break;
        }
        empty = empty % numExchange;        // remaining empty bottles
        
    }
    return maximum;
};

console.log(numWaterBottles(15,4));         // return 19

/**
 * Pseudocode
 * 
 * Have a maximum var for bottles drank
 * 
 * numBottles equals full water bottles
 */