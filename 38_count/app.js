/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let finalStr = '1';

    if (n === 1) {
        return finalStr;
    } else {
        let charPointer = 0;
        let countPointer = 0;
        let currentStr = '';        // This string is built upon the loop and resets at the end of building
        while (n > 1) {             // iterates through number of "rows"
            while (countPointer < finalStr.length) {            //  iterates through length of the final string using a counter
                while (finalStr.charAt(charPointer) === finalStr.charAt(countPointer)) {
                    countPointer++;             // increases count as long as the final string character does not change
                }
                currentStr += (countPointer - charPointer).toString();
                currentStr += (finalStr.charAt(charPointer));
                charPointer = countPointer;
            }
            finalStr = currentStr;          // sets a new final string as the current string built
            currentStr = '';                // resets string in progress
            charPointer = 0;                
            countPointer = 0;               // resets count pointer
            n--;                            // decreases the number of rows left
        }
        return finalStr;
    }
};

console.log(countAndSay(5));