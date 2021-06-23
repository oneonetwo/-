/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k){
    //求前缀和 并 计数
    let len = nums.length;
    let ans = 0; 
    let s = [0];
    let count = [1];
    for(let i=1;i<=len;i++){
        s[i] = s[i-1] + nums[i-1];
        if(count[s[i]-k] >= 0){
            ans += count[s[i]-k];
        }

        count[s[i]] ?count[s[i]]++ : count[s[i]]=1;
    }
    return ans;
}
