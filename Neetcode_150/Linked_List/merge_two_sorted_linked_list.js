/*
Merge Two Sorted Linked Lists
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from list1 and list2.

Example 1:



Input: list1 = [1,2,4], list2 = [1,3,5]

Output: [1,1,2,3,4,5]
Example 2:

Input: list1 = [], list2 = [1,2]

Output: [1,2]
Example 3:

Input: list1 = [], list2 = []

Output: []
Constraints:

0 <= The length of the each list <= 100.
-100 <= Node.val <= 100
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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
       let dummy = new ListNode();
       let tail = dummy;
       let curr1 = list1;
       let curr2 = list2;
       while(curr1&&curr2){
        if(curr1.val<curr2.val){
            tail.next = curr1;
            curr1 = curr1.next;
        }
        else{
            tail.next = curr2;
            curr2 = curr2.next;
        }
        tail = tail.next;
       }
       if(curr1)tail.next=curr1;
       if(curr2)tail.next=curr2;
       return dummy.next;
    }
}
