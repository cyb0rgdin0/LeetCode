/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// var sortStr = function(str) {
//     return str.split('').sort().join('');
// }

// var isAnagram = function(s, t) {
//     return (sortStr(s) == sortStr(t));
// }

var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    let x;
    let y;
    x = s.split('').sort().join('');
    y = t.split('').sort().join('');
    if (x === y) {
        return true;
    }
    return false;
};