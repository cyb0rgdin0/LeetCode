/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let x = Math.ceil(nums.length/2);
    nums = largeToSmall(nums);
    return nums[x-1];
};

function largeToSmall(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] < a[j+1]) {
                let temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    return a;
}