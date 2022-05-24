// PASCAL'S TRIANGLE

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var triangle = [];
    var arr = [];
    var temp = [];
    
    for (let i = 0; i < numRows; i++) {
        arr = []
        if (i == 0) {
            arr = [1];
        } else if (i == 1) {
            arr = [1,1];
        } else {
            for (let j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    arr.push(1);
                } else {
                    arr.push(temp[j-1] + temp[j]);
                }
            }   
        }
        triangle.push(arr);
        temp = arr;
    }
    return triangle;
};

