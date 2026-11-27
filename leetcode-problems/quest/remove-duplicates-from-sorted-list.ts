class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current: ListNode = head;
    
    if (head != null) {
        while (current.next != null) {
            if (current.next.val == current.val) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }
    
    return head;
};

// const head = [1,1,2];
const head = new ListNode(1, new ListNode(1, new ListNode(2)));
console.log("Result:", deleteDuplicates(head));