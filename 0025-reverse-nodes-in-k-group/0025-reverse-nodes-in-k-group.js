/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    // Step 1: Check if there are at least k nodes
    let count = 0;
    let node = head;
    while (node && count < k) {
        node = node.next;
        count++;
    }
    if (count < k) return head; // Not enough nodes to reverse

    // Step 2: Reverse k nodes
    let prev = null;
    let curr = head;
    let next = null;
    let i = 0;
    while (i < k && curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        i++;
    }

    // Step 3: Recurse on the remaining list
    if (next) {
        head.next = reverseKGroup(next, k);
    }

    // Step 4: Return the new head after reversal
    return prev;
};