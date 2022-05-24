/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let a = {}      // first map
    let b = {}      // second map
    let words = s.split(" ")        // split string into array

    if (words.length != pattern.length) return false

    for (let i = 0; i < pattern.length; i++) {      // loop to insert elements and compare
        let key = pattern[i]
        if (key in a) {
            if (a[key] != words[i])
            return false
        } else {
            if (words[i] in b) {
                return false
            }
            a[key] = words[i]
            b[words[i]] = key
        }
    }
};

wordPattern("abba","dog dog dog dog")