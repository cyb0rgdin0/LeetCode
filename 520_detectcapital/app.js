/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let x = word.length;
    let count = 0;
    for (let i = 0; i < x; i++) {
        if (word[i] == word[i].toUpperCase()) {
            count++;
        }
    }
    if (count == x || count == 0) {
        return true;
    } else if (count == 1 && word[0] == word[0].toUpperCase()) {
        return true;
    } else {
        return false;
    }
    
};

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("leetcode"));
console.log(detectCapitalUse("Google"));
console.log(detectCapitalUse("FlaG"));