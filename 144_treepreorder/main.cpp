#include <iostream>
#include <vector>
#include <stack>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

vector<int> preorderTraversal(TreeNode* root) 
{
    vector<int> vec;
    if (root == nullptr)
    {
        return vec;
    }
    stack<TreeNode*> nodes;
    nodes.push(root);
    while(!nodes.empty())
    {
        TreeNode *temp = nodes.top();
        nodes.pop();
        vec.push_back(temp->val);
        if (temp->right)
            nodes.push(temp->right);
        if (temp->left)
            nodes.push(temp->left);
    }
    
}
        

int main()
{

}

/*
    preOrder traversal (ROOT, LEFT, RIGHT)
        1) Go to root
        2) Traverse left subtree
        3) Traverse right subtree
*/

// void preOrder(TreeNode* root)
// {
//     if (root == NULL)
//     {
//         return;
//     }
//     cout << root->data << " ";
//     inOrder(root->left);
//     inOrder(root->right);
// }