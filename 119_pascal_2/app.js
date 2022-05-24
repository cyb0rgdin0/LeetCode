// Pascal's Triangle II

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var arr = [];
    var temp = [];
    
    for (let i = 0; i <= rowIndex; i++) {
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
        temp = arr;
    }
    return arr;
};

console.log(getRow(3));
// OUTPUT:
// [1,3,3,1]