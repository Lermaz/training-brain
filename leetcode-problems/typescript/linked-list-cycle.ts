/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function hasCycle(head: ListNode | null): boolean {
    let fast = head;
    let slow = head;
    console.log("fast", fast);
    console.log("slow", slow)

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        console.log("fast", fast)

        if (fast === slow) {
            return true;
        }
    }

    return false;    
};

const head = [3,2,0,-4]
const pos = 1;
console.log("Result:", hasCycle(head))