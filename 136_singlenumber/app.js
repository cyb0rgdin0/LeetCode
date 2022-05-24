/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    let last_num = [];
    for (i = 0; i < nums.length; i++) {
      val = nums[i];
      idx = last_num.indexOf(val);
      if ( idx === -1)
        last_num.push(val);
      else
        last_num.splice(idx, 1);
    }
    return last_num[0];
};