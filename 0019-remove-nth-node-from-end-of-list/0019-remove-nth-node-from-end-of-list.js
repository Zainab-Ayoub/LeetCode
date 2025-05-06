/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head) return null;
    let length=0;
    let temp=head;
    while(temp){
        length++;
        temp = temp.next;
    } if(n == length){
        let newhead = head.next;
        head.next = null;
        return newhead;
    } 
    let current = head;
    for(let i=1; i<length-n; i++){
        current = current.next;
    }  
    let nthnode = current.next;
    current.next = current.next.next;
    nthnode.next = null;

    return head;
};