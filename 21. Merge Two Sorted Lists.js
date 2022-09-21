/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 == null) return list2
    else if(list2 == null) return list1

    let head1 = list1
    let head2 = list2
    while(head2 !== null){

    }

    console.log({head1, head2})
    return head1
};
// [1,2,4]
// [1,3,4]