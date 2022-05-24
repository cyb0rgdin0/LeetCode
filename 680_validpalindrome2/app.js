/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    s = Array.from(s);
    let x = 0;
    let y = 0;
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] === s[j]) {    
            continue;
        } else {
            x++
            j++;
        }
    }
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] === s[j]) {    
            continue;
        } else {
            y++;
            i--;
        }
    }
    return (x <= 1 || y <= 1) ? true : false;
};
console.log(validPalindrome("abba"));       // return true
console.log(validPalindrome("aba"));      // return true
console.log(validPalindrome("abca"));     // return true
console.log(validPalindrome("eccer"));      // return true
console.log(validPalindrome("recce"));      // return true
console.log(validPalindrome("ebc bb ecec abba cec bb cbe"));          // return true
console.log(validPalindrome("ee cccc bebaeeabeb ccc ee a"));         //return false