/**
 * Required for Local Testing in VS Code 
 * Definition for singly-linked list.
 */ function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null ||  head.next == null){
        return head;
    }
    let newNode = reverseList(head.next);
    let lastNode = newNode;
    while(lastNode.next){
        lastNode = lastNode.next;
    }
    lastNode.next = head;
    head.next = null;
    return newNode;
};
//Creating LinkList For Local Testing
let five = new ListNode(5,undefined);
let four = new ListNode(4,five);
let three = new ListNode(3,four);
let two = new ListNode(2,three);
let one = new ListNode(1,two);

let revHead = reverseList(one);