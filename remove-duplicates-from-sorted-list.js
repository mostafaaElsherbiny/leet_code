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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var deleteDuplicates = function (head) {
  let current = head;
  while (current) {
    if (current.next !== null) {
      if (current.val == current.next.val) {
        current.next = current?.next?.next;
        continue;
      }
    }
    current = current.next;
  }
  return head;
};
let newList = new ListNode(1, new ListNode(2, new ListNode(2)));

console.log(deleteDuplicates(newList));
