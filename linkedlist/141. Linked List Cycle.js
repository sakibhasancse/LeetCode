/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


var hasCycle = function (head) {
    if (!head) return false
    let slow = head
    let fast = head.next

    while (slow != fast) {
        if (!fast || !fast?.next) return false
        slow = slow.next
        fast = fast.next.next
    }
    return true
};

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).