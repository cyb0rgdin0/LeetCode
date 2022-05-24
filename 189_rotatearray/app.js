/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let x = nums.length - 1
    for (let i = 0; i < k; i++) {
        let num = nums[x];
        nums.splice(x, 1);
        nums.unshift(num);
    }
};