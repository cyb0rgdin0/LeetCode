/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

public class Solution {    
    public static void main(String[] args)
    {
        ListNode l1;
        ListNode l2;
    }
    
    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int sum = getNum(l1) + getNum(l2);
        ListNode l3 = new ListNode();
        int length = (int)(Math.log10(sum) + 1);
        for (int i = 0; i < length; i++)
        {
            l3.add(i, sum % 10);
            sum /= 10;
        }
        return l3;
    }

    public static int getNum(ListNode l1)
    {
        int num = 0;
        for (int i = l1.size() - 1; i >= 0; i++)
        {
            num *= 10;
            num += l1.get(i);
        }
        return num;
    }
}