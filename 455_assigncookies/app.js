/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = smallToLarge(g);
    s = smallToLarge(s);
    
    let count = 0;
    console.log(g);
    console.log(s);
        for (let i = 0; i < g.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (g[i] <= s[j]) {
                s.splice(j, 1);
                count++;
                break;
            }
        }
    }

    console.log(g);
    console.log(s);

    return count;
};

function smallToLarge(a) {
    let x = a.length;
    let temp;
    for(var i = 0; i < x; i++){
        for(var j = 0; j < x - 1; j++){
            if (a[j] > a[j+1]) {
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    return a;
}

let g = [10,9,8,7];
let s = [5,6,7,8];

console.log(findContentChildren(g,s));
