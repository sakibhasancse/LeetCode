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
var deleteDuplicates = function (head) {
    let newList = head;
    while (newList != null && newList.next != null) {
        if (newList.val == newList.next.val) {
            newList.next = newList.next.next;
        } else {
            newList = newList.next;
        }
    }
    return head;
};
