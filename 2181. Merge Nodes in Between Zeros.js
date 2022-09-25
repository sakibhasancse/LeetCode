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
  // head = head.next; // This step is required as the first val of head is always going to be 0
  let curr = head,
    result = null;
  let sum = 0;

  while (curr?.next) {
    if (curr.val != 0) {
      sum = 0;
      result.val += curr.val;
    } else {
      if (result == null) result = head;
      else {
        result = result.next;
        result.val = 0;
      }
    }
    sum += head.val;
    curr = curr.next;
  }
  result.next = null;
  console.log({ result });
  return head;
};
