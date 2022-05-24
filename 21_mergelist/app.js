/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeList = function(l1, l2) {
    for (let i = 0; i < l2.length; i++) {
        if (l2[i] === undefined) {
            continue;
        } else {
            l1.push(l2[i]);
        }
    }
}

var mergeTwoLists = function(l1, l2) {
    if ((!l1) ||(!l2)) {
        return l1 ? l1 : l2;
    }
    var l3;
    mergeList(l3, l1);
    mergeList(l3, l2);
    return l3;
};

let l1 = [1,2,4];
let l2 = [1,3,4];

console.log(mergeTwoLists(l1,l2));