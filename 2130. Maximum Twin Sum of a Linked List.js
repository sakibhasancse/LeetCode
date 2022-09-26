/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let allNumber = [];
    while (head) {
        allNumber.push(head.val);
        head = head.next;
    }

    let maximumSum = 0;
    for (var i = 0; i < allNumber.length / 2; i++) {
        maximumSum = Math.max(maximumSum, allNumber[i] + allNumber[allNumber.length - 1 - i]);
    }

    return maximumSum;
};
