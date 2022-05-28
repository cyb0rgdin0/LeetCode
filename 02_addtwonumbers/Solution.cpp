#include <iostream>
using namespace std;
#include <list>

struct ListNode 
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    // empty constructor
    ListNode(int x) : val(x), next(nullptr) {}
    // single param constructor
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
    public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        int sum = 0;
        int remainder = 0;
        ListNode *l3 = nullptr;
        ListNode **node = &l3;
        while(l1 != nullptr || l2 != nullptr || sum > 0)
        {
            if (l1 != nullptr)
            {
                sum += l1->val;
                l1 = l1->next;
            }
            if (l2 != nullptr)
            {
                sum += l2->val;
                l2 = l2->next;
            }
            remainder = sum % 10;
            sum /= 10;
            *node = new ListNode(remainder);
            node = &((*node)->next);
        }
        return l3;
    }
};

void printList(ListNode* list)
{
    ListNode *temp = list;
    while(temp != nullptr)
    {
        cout << temp->val;
        temp = temp->next;
    }
    cout << endl;
}

int main()
{
    ListNode *l1 = new ListNode(9);
    l1->next = new ListNode(9);
    l1->next->next = new ListNode(9);
    l1->next->next->next = new ListNode(9);
    l1->next->next->next->next = new ListNode(9);
    l1->next->next->next->next->next = new ListNode(9);
    l1->next->next->next->next->next->next = new ListNode(9);
    

    ListNode *l2 = new ListNode(9);
    l2->next = new ListNode(9);
    l2->next->next = new ListNode(9);
    l2->next->next->next = new ListNode(9);

    Solution s;
    ListNode *l3 = s.addTwoNumbers(l1, l2);
    printList(l1);
    printList(l2);
    printList(l3);
    return 0;
}

// [9,9,9,9,9,9,9] add onto [9,9,9,9]
// 9 + 9 = 18 -> [8] carry 1 to second place
// 9 + 9 = 18 -> [8, 18 + 1] -> [8, 9] carry 1 to third place
// 9 + 9 = 18 -> [8, 9, 18 + 1] -> [8, 9, 9] carry 1 to fourth place
// 9 + 9 = 18 -> [8, 9, 9, 18 + 1] -> [8, 9, 9, 9] carry 1 to fifth place
// 9 + 0 = 10 -> [8, 9, 9, 9, 9 + 1] -> [8, 9, 9, 9, 0] carry 1 to sixth place
// 9 + 0 = 10 -> [8, 9, 9, 9, 0, 9 + 1] -> [8, 9, 9, 9, 0, 0] carry 1 to seventh place
// 9 + 0 = 10 -> [8, 9, 9, 9, 0, 0, 9 + 1] -> [8, 9, 9, 9, 0, 0, 0] carry 1 to eight place
// 0 + 0 = 00 -> [8, 9, 9, 9, 0, 0, 0, 0 + 1] -> [8, 9, 9, 9, 0, 0, 0, 1]
// [8,9,9,9,0,0,0,1]