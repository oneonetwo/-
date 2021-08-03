//树形DP

var maxPathSum = function(root) {
    let ans = -Infinity;
    function dfs(root){
        if(!root) return 0;
        let left =  dfs(root.left);
        let right = dfs(root.right);
        let Max_Branch = Math.max(root.val,  root.val+left, root.val+right);
        ans = Math.max(ans, Max_Branch, root.val+right+left)
        return Max_Branch;
    }
    dfs(root);
    return ans
};
