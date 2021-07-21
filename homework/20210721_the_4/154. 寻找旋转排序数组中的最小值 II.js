var findMin = function(nums) {
    let left = 0;
    let right = nums.length-1;
    if(nums[left]<nums[right]) return nums[left];
    while(left<right) {
        let mid = (left+right)>>1;
        if(nums[mid]<nums[right]){
            right = mid;
        }else if(nums[mid]> nums[right]){
            left = mid + 1;
        }else{
            right -=1;
        }
    }
    
    return nums[left];
};
