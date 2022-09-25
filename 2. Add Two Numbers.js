/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
// Output: [8, 9, 9, 9, 0, 0, 0, 1]

var addTwoNumbers = function (l1, l2) {
  const link1 = l1?.reverse()?.reduce((a, b) => a + b);
  const link2 = l2?.reverse()?.reduce((a, b) => a + b);
  const total = link1 + link2;
  return total.split("");
};
