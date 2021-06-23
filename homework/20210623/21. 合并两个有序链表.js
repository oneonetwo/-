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
// var mergeTwoLists = function(l1,l2){
//     if(!l1){
//         return l2
//     }else if(!l2){
//         return l1;
//     }
//     if(l1.val<l2.val){
//         let next = l1.next;
//         l1.next = mergeTwoLists(next,l2);
//         return l1;
//     }else{
//         let next = l2.next;
//         l2.next = mergeTwoLists(l1,next);
//        return l2;
//     }
// }
var mergeTwoLists = function(l1,l2){
    let newList= new ListNode(0, null);
    let project = newList;
    while(l1!=null && l2!=null){
        if(l1.val > l2.val){
            newList.next = l1;
            l1 = l1.next;
        }else{
            newList.next = l2;
            l2 = l2.next;
        }
        nextList = newList.next;
    }
    l1 && (nextList.next = l1);
    l2 && (nextList.next = l2);
    return project.next;
}
