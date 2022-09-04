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
var getDecimalValue = function (head) {
  let number = 0;
  let totalLength = 0
  while (head) {
    console.log({ number, totalLength, number, head, val: head.val, next: head.next })
    number = number + (head.val * 2 ** totalLength)
    totalLength++
    head = head.next
  }
  console.log({ number })
  return number
};