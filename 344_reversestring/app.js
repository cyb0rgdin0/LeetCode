/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let x = s.length
    let y = Math.floor(x/2)
    for (let i = 0; i < y; i++) {
        let temp = s[i];
        s[i] = s[x-1-i];
        s[x-1-i] = temp;
    }
};

console.log(reverseString(["h","e","l","l","o"]));