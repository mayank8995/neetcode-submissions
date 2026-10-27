// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const oldToCopy = new Map();
        oldToCopy.set(null, null)
        let curr = head;
        while(curr !== null){
            let copy = new Node(curr.val);
            oldToCopy.set(curr, copy);
            curr = curr.next;
        }
        curr = head;
        while(curr !== null){
            const copy = oldToCopy.get(curr); 
            copy.next = oldToCopy.get(curr.next); // if curr.next is null so copy.next should point to null. i.e why initialized oldToCopy.set(null, null)
            copy.random = oldToCopy.get(curr.random);
            curr = curr.next;
        }
        return oldToCopy.get(head)
    }
}
