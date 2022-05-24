/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let nextNode = head;
    let value = head.val;
    while(next.node !== null) {
        nextNode = nextNode.next;
        value <<= 1;
        value |= nextNode.val;
    }
    return value;
};

head = new ListNode(1,
    new ListNode(0,
      new ListNode(0,
        new ListNode(1,
          new ListNode(0,
            new ListNode(0,
              new ListNode(1,
                new ListNode(1,
                  new ListNode(1,
                    new ListNode(0,
                      new ListNode(0,
                        new ListNode(0,
                          new ListNode(0,
                            new ListNode(0,
                              new ListNode(0)))))))))))))));

console.log(getDecimalValue(head));