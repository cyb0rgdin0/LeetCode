/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let array = [];
    for (let i = 0; i < paths.length; i++) {
        array.push(paths[i][0]);
    }
    for (let i = 0; i < paths.length; i++) {
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (paths[i][1] == array[j]) {
                count++;
            }
        }
        if (count == 0) {
            return paths[i][1];
        }
    }
};