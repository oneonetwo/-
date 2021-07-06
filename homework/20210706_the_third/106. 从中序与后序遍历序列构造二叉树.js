/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let inLen = inorder.length, poLen = postorder.length;
    //因为要先确定根元素，所以到这遍历两个序列
    //后序的最后一个元素就是root节点的值
    function find(r1,l1, r2, l2){
        if(r2<l2) return null;
        //r1 l1 为中序的下标，   r2, l2为后序的下标
        let node = new TreeNode(postorder[r2]);
        let mid = r1;
        while(inorder[mid] != node.val) mid--;
        let rightSize = r1 - mid;
        //r1是在中序中右子树的end位置，l1为start位置，
        //r2是后序中end位置，l2为start位置
        node.right = find(r1, mid+1, r2-1, r2-rightSize);
        node.left = find(mid-1, l1 , r2-rightSize-1, l2);
        return node;
    }
    return find(inLen-1, 0, poLen-1, 0);
};
