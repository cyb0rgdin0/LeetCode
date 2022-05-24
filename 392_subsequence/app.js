/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let x = t.length;
    if (s.length == 0) {
        return true;
    }
    let count = 0;
    for (let i = 0; i < x; i++) {
        if (t[i] === s[count]) {
            count++
        }
        if (count == s.length) {
            return true;
        }
    }
    return false;
};

console.log(isSubsequence("","abc"));           // return true
console.log(isSubsequence("abc","ahbgdc"));     // return true
console.log(isSubsequence("axc","ahbgdc"));     // return false