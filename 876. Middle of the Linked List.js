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
var middleNode = function(head) {
    let count = 0; // Initialize count
    let current = head; // Initialize current
    while (current != null)
    {
        count++;
        current = current.next;
    }
    count = Math.floor(count/2)
    while (count)
    {
        count--;
        head = head.next;
    }
    return head;
};

var middleNode = function(head) {
    let middle = head;
    let current = head;
    let nodeNumber = 0;

    while (current != null) {
        nodeNumber++;
        if (nodeNumber % 2 == 0) middle = middle.next;
        current = current.next;
    }
    return middle
};

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        console.log({head, slow:slow.next, fast:fast.next.next})
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};
