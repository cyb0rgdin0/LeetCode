/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    let a = 0;
    for (let i = 0; i < pieces.length; i++) {
        let match = false
        let index = -1;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == pieces[i][0]) {
                match = true;
                index = j;
                break;
            }
        }

        if (match == true) {
            let count = 0
            for (let k = index, x = 0; k < (index + pieces[i].length) || k < arr.length, x < pieces[i].length; k++, x++) {
                if (arr[k] == pieces[i][x]) {
                    count++
                }
            }
            if (count != pieces[i].length) {
                return false
            } else {
                a++
            }
        }
    }
    if (a != pieces.length) {
        return false;
    }
    return true;
};

let arr = [91,4,64,78]
let pieces = [[78],[4,64],[91]]

console.log(canFormArray([85],[[85]]))
console.log(canFormArray([15,88],[[88],[15]]))
console.log(canFormArray([49,18,16],[[16,18,49]]))
console.log(canFormArray([91,4,64,78],[[78],[4,64],[91]]))
console.log(canFormArray([1,3,5,7],[[2,4,6,8]]))