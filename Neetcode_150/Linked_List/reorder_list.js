/*
Reorder Linked List
You are given the head of a singly linked-list.

The positions of a linked list of length = 7 for example, can intially be represented as:

[0, 1, 2, 3, 4, 5, 6]

Reorder the nodes of the linked list to be in the following order:

[0, 6, 1, 5, 2, 4, 3]

Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:

[0, n-1, 1, n-2, 2, n-3, ...]

You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

Example 1:

Input: head = [2,4,6,8]

Output: [2,8,4,6]
Example 2:

Input: head = [2,4,6,8,10]

Output: [2,10,4,8,6]
Constraints:

1 <= Length of the list <= 1000.
1 <= Node.val <= 1000
*/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
       //first find the middle of linked list using slow and fast pointer
       let slow = head;
       let fast = head;
       while(fast!==null && fast.next!==null) {
        fast = fast.next.next;
        slow = slow.next
       }

       //now slow pointer is at the last node of the first half
       let second = slow.next;

       //now set the slow.next and prev of first node of second half to null
       let prev = (slow.next=null);
       while(second!==null){
        const temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
       }

       //now start merging first and second half
       let first = head;
       second = prev;//as prev is at the first node becoz list is reversed
       while(second!==null){
        const tmp1 = first.next;
        const tmp2 = second.next;
        first.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
       }
    }
}
