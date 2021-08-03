//并查集
var numIslands = function(grid) {
    if(!grid || grid.length==0) return 0;
    //方向数组
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    let m = grid.length;
    let n = grid[0].length;
    let fa = [];
    let count = m*n;
    let water = 0;
    //初始化并查集
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            fa[num(i,j)] = num(i,j);
        }
    }
    //创建并查集
    for(let i=0;i<m;i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == '0') {
                //减去水域
                count--;
                continue;
            };
            for(let k=0; k<4; k++) {
                let ni = i + dx[k];
                let nj = j + dy[k];
                //合法性
                if(ni<0 || nj<0 || ni>=m || nj >= n || grid[ni][nj] == '0') continue;
                //union操作  此时grid[ni][nj] grid[i][j]  都为1 则进行合并操作；
                let fij = find(num(i, j));
                let fninj = find(num(ni, nj));
                if(fij != fninj){
                    // fa[find(num(ni, nj))] = find(num(i, j));
                    fa[fninj] = fij;
                    //减去路径压缩的部分
                    count--;
                }
              
            }
        }
    }
    return count;
    function num(i, j){
        return i*n+j;
    }
    function find(x){
        if(x==fa[x]) return x;
        return fa[x] = find(fa[x]);
    }
}
