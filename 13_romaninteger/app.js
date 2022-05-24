/**
 * @param {string} s
 * @return {number}
 */
const romanLiterals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(s) {
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        let index = s[i];
        let prefix = null;
        if (i+1 < s.length) {
            prefix = s[i+1];
        }
        
        if (index === 'I' && (prefix === 'V' || prefix === 'X')) {
            num += romanLiterals[prefix] - 1;
            i++;
        } else if (index === 'X' && (prefix === 'L' || prefix === 'C')) {
            num += romanLiterals[prefix] - 10;
            i++;
        } else if (index === 'C' && (prefix === 'D' || prefix === 'M')) {
            num += romanLiterals[prefix] - 100;
            i++;
        } else {
            num += romanLiterals[index];
        }
    }
    return num;
};