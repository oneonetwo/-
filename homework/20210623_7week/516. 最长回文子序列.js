//区间DP

var longestPalindromeSubseq = function(s) {
    let n = s.length;
    // dp[i][j]表示s{i..j}字符i到j的最长回文子序列
    let dp = new Array(n).fill(0).map(_=>new Array(n).fill(0));
    //遍历区间长度
    for(let len=1;len<=n;len++){
        //枚举左端点；
        for(let l = 0; l < n-len+1; l++){
            //长度为len的区间右端点；
            let r = l+len-1;//自己画个数组算算；
            //如果长度为1，则l=r,那么字符为1的串，dp[l][r] = 1; 
            if(len == 1) {
                dp[l][r] = 1;
                continue;
            }
            if(s[l]==s[r]){
                //如果前后字符相等那么长度+2；
                dp[l][r] = dp[l+1][r-1] + 2;
            }else{
                //如果前后字符不相等那么取最大
                dp[l][r] = Math.max(dp[l+1][r], dp[l][r-1]);
            }
        }
    }
    return dp[0][n-1]
};
