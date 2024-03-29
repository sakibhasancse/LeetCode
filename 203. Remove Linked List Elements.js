/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) return head;
    let curr = head,
        next = head?.next;
    while (curr) {
        while (next && next.val === val) {
            next = next.next;
        }
        curr.next = next;
        curr = next;
        next = next?.next;
    }
    return head;
};

//Recursive solutions
var removeElements = function (head, val) {
    while (head && head.val === val) {
        head = head.next
    }
    if (!head) return head
    head.next = removeElements(head.next, val)
    return head;
};