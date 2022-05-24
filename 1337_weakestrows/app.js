/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let arr = [];                   // array of indices
    let num = [];                   // array of occurences of 1 in each mat array
    let index = [];
    for (let i = 0; i < mat.length; i++) {
        let count = 0;
        for(let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] == 1) {
                count++;
            }
        }
        num.push(count);
        arr.push(i);
    }


    for (let i = 0; i < num.length; i++) {
        let temp;
        let temp2;
        for (let j = 0; j < num.length - 1; j++) {
            if (num[j] > num[j+1]) {
                temp = num[j];
                num[j] = num[j+1];
                num[j+1] = temp;

                temp2 = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp2;
            }
        }
    }
    
    for (let i = 0; i < k; i++) {
        index.push(arr[i]);
    }
    
    return index;
};

let x = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0], [1,1,1,1,1]];
let a = 3;

let y = [[1,0,0,0],[1,1,1,1],[1,0,0,0],[1,0,0,0]];
let b = 2;

console.log(kWeakestRows(x,a));             // return [2,0,3]
console.log(kWeakestRows(y,b));             // return [0,2]