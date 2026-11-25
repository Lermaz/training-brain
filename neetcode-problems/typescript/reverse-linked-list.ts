class ListNode {
    val: number;
    next: null;
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode | null{
        let prev: ListNode | null = null;
        let curr = head;

        while (curr) {
            let nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }

        return prev;
    }
}

const head = [0,1,2,3];
const solution = new Solution();
console.log("Result:", solution.reverseList(head))