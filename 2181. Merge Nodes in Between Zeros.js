/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var mergeNodes = function (head) {
    if (!head || !head?.next) return head;
    let curr = head,
        result = null;

    while (curr?.next) {
        if (curr.val != 0) result.val += curr.val;
        else {
            if (result == null) result = head;
            else {
                result = result.next;
                result.val = 0;
            }
        }
        curr = curr.next;
    }
    result.next = null;
    return head;
};
