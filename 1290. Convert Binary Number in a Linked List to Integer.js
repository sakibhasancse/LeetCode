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
  let numbers = [];

  while (head) {
    numbers.unshift(head.val)
    head = head.next
  }
  let number = 0;
  for (var i = 0; i < numbers.length; i++) {
    console.log({ i, numbers: numbers[i], number })
    if (numbers[i]) number = number + (numbers[i] * 2 ** i)

  }
  return number
};