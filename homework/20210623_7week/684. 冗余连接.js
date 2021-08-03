//并查集
var findRedundantConnection = function(edges) {
    //初始化并查集, n<=1000
    let fa = [];
    for(let i=0; i<=1000; i++) fa[i] = i;
    for(let edge of edges){
        let [p1, p2] = edge;
        let fp1 = find(p1);
        let fp2 = find(p2);
        //添加一条边，如果已经存在，说明成环了。
        if(fp1==fp2) return edge;
        unionSet(p1, p2)
    }
    function find(x){
        if(x == fa[x]) return x;
        return fa[x] = find(fa[x]);
    }
    //合并
    function unionSet(x, y) {
        x = find(x),
        y = find(y);
        if(x != y) fa[y] = x; 
    }
};
