// REMOVE DUPLICATES

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    for(let i = 1; i < nums.length; ) {
        if (nums[i] == nums[i-1]) {
            nums.splice(i-1, 1);
        } else {
            i++;
        }
    }
    return nums.length
};

console.log([1,1,2,2,3,3]);