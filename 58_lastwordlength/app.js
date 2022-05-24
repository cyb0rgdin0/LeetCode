/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let x = Array.from(s)
    let hasSpace = false;
    let hasChar = false;
    var count = 0;
    if (x.length == 0) {
        return 0;
    }
    for (let i = x.length; i >= 0; i--) {
        if (x[i] === ' ' || x[i] === undefined) {
            hasSpace = true;
            if (hasChar == false) {
                continue;
            }
            if (hasChar == true && hasSpace == true) {
                break;
            }
        } else {
            count++;   
            hasChar = true;
            console.log(x[i]);
        }
    }
    return count;
};

// console.log(lengthOfLastWord("asdf"));
// console.log(lengthOfLastWord("Master Of"));
// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord("a"));
// console.log(lengthOfLastWord("a "));
// console.log(lengthOfLastWord("   "));
// console.log(lengthOfLastWord("b ab "));