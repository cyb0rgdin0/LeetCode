/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0 || strs == undefined) {
        return "";
    }
    if (strs.length == 1) {
        return strs[0];
    }
    var prefix = ""
    for (let i = 0; i < strs[0].length; i++) {      // compare 
        let x = true;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] == strs[0][i]) {
                continue;
            } else {
                x = false;
            }
        }
        if (x == true) {
            prefix = prefix + strs[0][i];
        } else {
            break;
        }
    }
    return prefix;
};