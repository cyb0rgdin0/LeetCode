/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let l = mat.length;         // length
    let n = mat.length-1;         // track final index
    let x = 0;
    for (let i = 0; i < l; i++) {
        sum += mat[i][i];
        if (n - x != i) {
            sum += mat[i][n-x];
        }
        x++;
    }
    return sum;
};

console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]));
console.log(diagonalSum([[1,1,1,1],
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1]]));
console.log(diagonalSum([5]));