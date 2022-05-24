/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    if (s.length < 2) {
        return s;
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (isBad(s[i], s[i+1]) === true) {
            s = s.replace(s[i]+s[i+1],"");
            i = 0;
        }
    }

    if (s.length === 2) {
        if (isBad(s[0], s[1]) === true) {
            s = s.replace(s[0]+s[1],"");
            i = 0;
        }
    }

    return s;
};

function isBad(c1, c2) {
    if (c1.toUpperCase() === c2.toUpperCase()) {
        if ((c1 === c1.toUpperCase() && c2 === c2.toLowerCase()) || (c1 === c1.toLowerCase() && c2 === c2.toUpperCase())) {
            return true;
        }
    }
    return false;
}

console.log(makeGood(""));
console.log(makeGood("s"));
console.log(makeGood("leEeetcode"));
console.log(makeGood("abBAcC"));