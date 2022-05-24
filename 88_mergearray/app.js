/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

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

var merge = function(nums1, m, nums2, n) {
    let count = 0;
    for (let i = m; i < m+n; i++) {
        nums1[i] = nums2[count];
        count++;
    }
    smallToLarge(nums1);
};