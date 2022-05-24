/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        let unique = true;
        for (let j = 0; j < s.length; j++) {
            if (j === i) {
                continue;
            } else if (s[j] === s[i]) {
                unique = false;
                break;
            }
        }
        if (unique === true) {
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));     // return 0
console.log(firstUniqChar("loveleetcode"));     // return 2