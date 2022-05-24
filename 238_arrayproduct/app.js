/**
 * @param {number[]} nums
 * @return {number[]}
 */

// NESTED FOR LOOP O(n^2)

 // var productExceptSelf = function(nums) {
//     let arr = [];
//     for (let i = 0; i < nums.length; i++) {
//         arr[i] = 1;
//     }
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (i === j) {
//                 continue;
//             } else {
//                 arr[i] *= nums[j];
//             }
//         }
//     }
//     return arr;
// };

// USING DIVISION AND TWO SEPARATE FOR LOOPS

// var productExceptSelf = function(nums) {
//     let product = 1;
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             count++;
//             continue;
//         } else {
//             product *= nums[i];
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (count === 0) {
//             nums[i] = product / nums[i];
//         } else if (count === 1) {
//             if (nums[i] === 0) {
//                 nums[i] = product;
//             } else {
//                 nums[i] = 0;
//             }
//         } else if (count > 1) {
//             nums[i] = 0;
//         }
//     }
//     return nums;
// };

// 

var productExceptSelf = function(nums) {
    
};

console.log(productExceptSelf([1,2,3,4]));          // return [24,12,8,6]
console.log(productExceptSelf([1,0]));              // return [0,1]
console.log(productExceptSelf([0,0]));              // return [0,0]
console.log(productExceptSelf([1,0,3,4]));          // return [0,12,0,0]