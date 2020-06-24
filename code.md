# Array
### 1. 283.移动零
1. 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
2. 示例:
    - `输入: [0,1,0,3,12]`  `输出: [1,3,12,0,0]`
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
1. 链接： https://leetcode-cn.com/problems/container-with-most-water/  
2. 描述：给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。  
3. 示例：
    - 输入：[1,8,6,2,5,4,8,3,7]; 输出：49  
4. 解题：
    - 1. 枚举：left bar x, right bar y; (x-y)*height_diff; 时间复杂度为O(n^2)
    - 2. 左右边界，向中间收敛，中间夹逼；时间复杂度 O(n)
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
1. 链接： https://leetcode-cn.com/problems/climbing-stairs/  
2. 描述：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？  
3. 示例：
    ```
    输入： 3
    输出： 3
    解释： 有三种方法可以爬到楼顶。
    1.  1 阶 + 1 阶 + 1 阶
    2.  1 阶 + 2 阶
    3.  2 阶 + 1 阶
    ```
4. 解题
    - 1. 暴力，基本情况，数学归纳法，找出最近的重复的子问题；斐波拉契数列
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
### 4. 15. 三数之和
1. 链接：https://leetcode-cn.com/problems/3sum/
2. 描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。  
3. 示例：
    ```
    给定数组 nums = [-1, 0, 1, 2, -1, -4]，
    满足要求的三元组集合为：
    [
    [-1, 0, 1],
    [-1, -1, 2]
    ]
    ```
4. 解题
    - 1. 暴力，三层循环 O(n^3);
    - 2. hash表来记录，O(n^2);
    - 3. 排序+双指针，左右下表往中间推进。
    ```javascript
    function threesum(nums){
        let len = nums.length,res=[];
        for(let i=0;i<len-2;i++){
            for(let j=i+1;j<len-1;j++){
                for(let k=j+1;k<len;k++){
                    if(nums[i]+nums[j]+nums[k] == 0){
                        res[res.length] = [nums[i],nums[j],nums[k]]
                    }
                }
            }
        }
        return res;
    }

    //排序+双指针

    var threeSum = function(nums) {
    let len = nums.length,
        res = [];
        nums.sort((a,b)=>a-b);
        for(let k=0;k<len;k++){
            if(nums[k]>0){
                break;
            }
            if(k>0&&nums[k]==nums[k-1]){
                continue;
            }
            for(let i=k+1,j=len-1;i<j;){
                let s = nums[k]+nums[i]+nums[j];
                if(s>0){
                    j-=1;
                    while(i<j&&nums[j]==nums[j+1]){
                        j-=1;
                    }
                }else if(s<0){
                        i+=1;
                    while(i<j&&nums[i]==nums[i-1]){
                        i+=1;
                    }
                }else{
                    res[res.length] = [nums[k],nums[j],nums[i]];
                    i+=1;
                    j-=1;
                    while(i<j&&nums[j]==nums[j+1]){
                        j-=1;
                    }
                    while(i<j&&nums[i]==nums[i-1]){
                        i+=1;
                    }
                }
            }
        }
        return res;
    };
    ```
    
    
# Linked List
### 1. 15. 反转链表
1. 链接：https://leetcode-cn.com/problems/reverse-linked-list/submissions/
2. 描述：反转一个单链表。
3. 示例：
    ```
    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL
    ```
4. 解题
    - 1. 交换前后指针的指向，
    ```javascript
    var reverseList = function (head){
        if(!head || !head.next){ return head };
        let current = head, previous = null;
        while(current){
            let next = current.next;
            current.next = previous;

            previous = current;
            current = next;
        }
        return previous;
    }
    ```
