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
     * @param {ListNode} head
     * @return {void}
     */
    /**
     * brute force
     */
    // reorderList(head) {
    //     if(!head) {return}
    //     let nodes = [];
    //     let curr = head;
    //     while(curr){
    //         nodes.push(curr);
    //         curr = curr.next;
    //     }
    //     let i = 0;
    //     let j = nodes.length - 1;

    //     while(i < j){
    //         nodes[i].next = nodes[j];
    //         i++;
    //         if(i>=j) { break;}
    //         nodes[j].next = nodes[i];
    //         j--;
    //     }
    //     return nodes[i].next = null;
    // }
    
    reorderList(head) {
        let slow = head;
        let fast = head.next;
        while(fast!==null && fast.next!==null){
            slow = slow.next;
            fast = fast.next.next;
        }
        // reverse the second half
        let curr = slow.next;
        let prev = (slow.next = null);
        while(curr!==null){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        // merge two list;
        let first = head;
        let second = prev;

        while(second!==null){
            let temp1 = first.next;
            let temp2 = second.next;
            first.next = second;
            second.next = temp1;
            first = temp1;
            second = temp2
        }
    }
}
