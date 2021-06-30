var numSubmatrixSumTarget = function(matrix, target) {
    let sum = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));
    let n = matrix.length;
    let m = matrix[0].length;
    //先求前缀和、
    for (let i = 0; i < n; i++)        
        for (let j = 0; j < m; j++)            
            sum[i][j] = getSum(i - 1, j) + getSum(i, j - 1) - getSum(i - 1, j - 1) + matrix[i][j];
    function getSum(i, j){
        if (i >= 0 && j >= 0) return sum[i][j];    
        return 0;
    }

    let ans = 0;
    for(let r1=0;r1<n;r1++){
        for(let c1=0;c1<m;c1++){
            for(r2=r1;r2<n;r2++){
                for(c2=c1;c2<m;c2++){
                    if(target == getSum(r2,c2) - getSum(r2, c1-1) - getSum(r1-1, c2) + getSum(r1-1, c1-1)){
                        ans +=1 ;
                    };
                }
            }
        }
    }

    return ans;
}
