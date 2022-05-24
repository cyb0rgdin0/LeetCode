/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    if (s.length == 1) {
        return -1;
    }
    let count = 0;
    let match = false;
    for (let i = 0; i < s.length; i++) {
        let temp = 0;
        let end = 0;
        let check = false
        for (let j = s.length - 1; j > i; j--) {
            if (s[j] == s[i]) {
                check = true;
                end = j;
                break;
            }
        }
        if (check == true) {
            match = true;
            for (let x = i + 1; x < end; x++) {
                temp++;
            }
        }
        if (temp > count) {
            count = temp;
        }
    }
    if (match == false) return -1;
    return count;
};

console.log(maxLengthBetweenEqualCharacters("aa"));
console.log(maxLengthBetweenEqualCharacters("abca"));
console.log(maxLengthBetweenEqualCharacters("cbzxy"));
console.log(maxLengthBetweenEqualCharacters("cabbac"));