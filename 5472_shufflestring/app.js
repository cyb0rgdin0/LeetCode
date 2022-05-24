/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let x = Array.from(s);

    let tempVar;
    let tempChar;
    for (let i  = 0; i < indices.length; i++) {
        for (let j = 0; j < indices.length - 1; j++) {
            if (indices[j] > indices[j+1]) {
                tempVar = indices[j];
                tempChar = x[j]
                indices[j] = indices[j+1];
                x[j] = x[j+1]
                indices[j+1] = tempVar;
                x[j+1] = tempChar;
            } 
        }
    }
    let string = x.join('');
    return string;
};

console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]));       // return "leetcode"
console.log(restoreString("abc",[0,1,2]));                      // return "abc"
console.log(restoreString("aiohn",[3,1,4,2,0]));                // return "nihao"
console.log(restoreString("aaiougrt",[4,0,2,6,7,3,1,5]));       // return "arigatou"
console.log(restoreString("art",[1,0,2]));                      // return "indices"