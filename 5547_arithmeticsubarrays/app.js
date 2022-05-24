/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let boolean = [];           // array to hold conditions
    for (i = 0; i < l.length; i++) {
        let temp = [];          // temp array for nums within l[i] and r[i]
        let check = true;       // temp check to see if arithmetic
        for (let j = l[i]; j <= r[i]; j++) {
            temp.push(nums[j]);
        }
        
        smallToLarge(temp);
        let diff = temp[1] - temp[0];
        
        for (let j = 2; j < temp.length; j++) {
            if (temp[j] - temp[j-1] != diff) {
                check = false;
                break;
            }
        }

        boolean.push(check);
    }
    return boolean;
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

let nums = [4,6,5,9,3,7]
let l = [0,0,2];
let r = [2,3,5];
console.log(checkArithmeticSubarrays(nums,l,r));

let x = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10];
let y = [0,1,6,4,8,7];
let z = [4,4,9,7,9,10];
console.log(checkArithmeticSubarrays(x,y,z));