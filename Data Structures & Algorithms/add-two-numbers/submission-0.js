/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(0);
        let carry = 0;
        let curr = dummy;
        while(l1 || l2 || carry) // carry is in condition becuase if while adding last digit we get carry,  we have to include it.
        {
            let v1 = l1 ? l1.val : 0;
            let v2 = l2 ? l2.val : 0;
            let v3 = v1 + v2 + carry;
            carry = Math.floor(v3/10);
            v3 = v3 % 10;
            let node = new ListNode(v3);
            curr.next = node;
            curr = curr.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }
        return dummy.next;
    }
}
