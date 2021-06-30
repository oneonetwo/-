/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists.length) return null
    if(lists.length<2) return lists[0];
    let mid = (lists.length/2) | 0;
    let l1 = lists.slice(0, mid);
    let l2 = lists.slice(mid);
    return merge(mergeKLists(l1), mergeKLists(l2));    
};
function merge(l1, l2) {
    let protect = new ListNode(0);
    pre = protect;
    while(l1!=null && l2!=null){
        if(l1.val<l2.val){
            pre.next = l1;
            l1 = l1.next;
        }else{
            pre.next = l2;
            l2 = l2.next;
        }
        pre = pre.next;
    }
    l2 && (pre.next = l2);
    l1 && (pre.next = l1);
    return protect.next;
}
