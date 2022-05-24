/**
 * Definition for a binary tree node. 
 **/
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

 /**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left,q.left) && isSameTree(p.right, q.right);
};

// let tree1 = new TreeNode(80, new TreeNode(90, new TreeNode(), new TreeNode()), new TreeNode(100, new TreeNode(), new TreeNode()));
// let tree2 = new TreeNode(70, tree1, new TreeNode());
// let tree3 = new TreeNode(50, tree2, new TreeNode());
// let tree4 = new TreeNode(30, tree3, new TreeNode(60, new TreeNode(), new TreeNode()));
// let tree5 = new TreeNode(20, new TreeNode(40, new TreeNode(), new TreeNode()), new TreeNode());
// let tree6 = new TreeNode(10, tree5, tree4);

// console.log(tree6);

// let tree = new TreeNode(1, new TreeNode(2, new TreeNode(), new TreeNode()), new TreeNode(3, new TreeNode(), new TreeNode()));
// let tree = new TreeNode(1, new TreeNode(2, new TreeNode(), new TreeNode(), new TreeNode()));

// console.log(tree);

let a = new TreeNode(1, new TreeNode(2,new TreeNode(), new TreeNode()), new TreeNode(3, new TreeNode(), new TreeNode()));
let b = new TreeNode(1, new TreeNode(2,new TreeNode(), new TreeNode()), new TreeNode(3, new TreeNode(), new TreeNode()));

console.log(isSameTree(a,b));