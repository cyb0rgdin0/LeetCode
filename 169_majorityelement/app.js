/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let x = Math.ceil(nums.length/2);
    for (let i = 0; i < nums.length; i++) {
        let count = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i == j) {
                continue;
            } else if (nums[j] === nums[i]) {
                count++;
            } else {
                continue;
            }
        }
        if (count >= x) {
            return nums[i];
        }
    }
};


let x =[2,2,1,1,1,2,2];
console.log(majorityElement(x));