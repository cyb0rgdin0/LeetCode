/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let x = s.length;
    let max_depth = 0;
    let count_depth = 0;
    for (let i = 0; i < x; i++) {
        if(s[i] == '(') {
            count_depth++;
        } else if (s[i] == ')') {
            if (count_depth > max_depth) {
                max_depth = count_depth;
            }
            count_depth--;
        } else {
            continue;
        }
    }
    return max_depth;
};

let s = "()";
console.log(maxDepth(s));
console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
console.log(maxDepth("(1)+((2))+(((3)))"));
console.log(maxDepth("1+(2*3)/(2-1)"));
console.log(maxDepth("1"));