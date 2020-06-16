# Array
### 1. 283.移动零
> 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
> 示例:
>> `输入: [0,1,0,3,12]`  `输出: [1,3,12,0,0]`
```javascript	
function moveZeroes(nums){
    let curIndex = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] != 0){
            nums[curIndex] = nums[i];            
            if(i!=curIndex){
                nums[i] = 0;
            }
            curIndex++;
        }
    }
    return nums;
}
```
### 2. 11. 盛最多水的容器
> 链接： https://leetcode-cn.com/problems/container-with-most-water/  
> 描述：给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。  
> 示例：
>> 输入：[1,8,6,2,5,4,8,3,7]; 输出：49  
> 解题：
>> 1. 枚举：left bar x, right bar y; (x-y)*height_diff; 时间复杂度为O(n^2)
>> 2. 左右边界，向中间收敛，中间夹逼；时间复杂度 O(n)
```javascript
//暴力求解 O(n^2)
function maxArea(arr){
	let max = 0;
	for(let i=0;i<arr.length-1;i++){
		for(let j=i+1;j<arr.length;j++){
			let height = arr[i]>arr[j]?arr[j]:arr[i];
			let area = height*(j-i);
			max = max>area?max:area;
		}
	}
	return max;
}

//双指针
function maxArea(arr){
	let max = 0;
	for(let i=0,j=arr.length-1;i<j;){
		let height = arr[i]>arr[j]?arr[j--]:arr[i++];
		max = max>height*(j-i)?max:height*(j-i);
	}
	return max;
}

```

### 3. 70. 爬楼梯
> 链接： https://leetcode-cn.com/problems/climbing-stairs/  
> 描述：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？  
> 示例：
```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```
> 解题
>> 1. 暴力，基本情况，数学归纳法，找出最近的重复的子问题；斐波拉契数列
```javascript
function climbStairs(n){
	if(n<2) return n;
	let s1 = 1,s2=2;
	for(let i=3;i<n;i++){
		let temp = s1+s2;
		s1 = s2;
		s2 = temp;
	}
	return s2;
}
```
