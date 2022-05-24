/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let x = nums.length;
    let array = nums.splice(x - k, k);
    nums.unshift(...array);
};