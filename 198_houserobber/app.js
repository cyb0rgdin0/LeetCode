/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2) {
        return nums[0] >= nums[1] ? nums[0] : nums[1];
    }
    
    nums[1] = Math.max(nums[0], nums[1]);

    let i;
    for (i = 2; i < nums.length; i++) {
        nums[i] = Math.max(nums[i-1], nums[i] + nums[i-2]);
    }
    return nums[i-1];
};

console.log(rob([]));          // return 0
console.log(rob([2]));          // return 2
console.log(rob([2,3]));        // return 3
// console.log(rob([1,2,3,1]));     // return 4
// console.log(rob([2,7,9,3,1]));
// console.log(rob([2,1,1,2]));