/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} z Total versions
     * @return {integer} The first bad version
     */
    
    return function(z) {
        let x = 1;
        for (i = 1; i <= z; i++) {
            let y = Math.floor((z-y)/2)
            if (isBadVersion(y) === true) {
                z = y;
            } else {
                x = y + 1;
            }
        }
        return start
    };
};