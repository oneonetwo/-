/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let ans = 0;
    // [total, start, end]
    let map = new Map();
    function helper(index){
        if(index==nums.length) return;
        let point = nums[index];
        if(map.get(point)){
            let rec = map.get(point);
            rec[0] = rec[0]+1;
            rec[2] = index;
            map.set(point, rec)
        }else{
            map.set(point, [1, index])
        }
        helper(index + 1);
    }
    helper(0);
    return ans;
};
