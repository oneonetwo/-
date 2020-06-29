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
    - 1. 交换前后指针的指向;
    - 2. 递归，思路跟方法1一样
    ```javascript
    //1. while
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
    
    //递归
    var reverseList = function (head){
        if(!head || !head.next){ return head};
        return reverse(head, null);
    }
    var reverse = function(current, previous){
        if(!current) return previous;
        let next = current.next;
        current.next = previous;

        return reverse(next, current)
    }
    ```
### 2. 24. 两两交换链表中的节点
1. 链接：https://leetcode.com/problems/swap-nodes-in-pairs
2. 描述：给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
        你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
3. 示例：
    ```
    给定 1->2->3->4, 你应该返回 2->1->4->3.
    ```
4. 解题
    1. 尾递归
    2. leetcode的高票解法
    ```javascript
    function swapPris(list, prev){
        if(!list||!list.next){ return list }
        //prev为null，那么是头节点
        if(!prev){
            var current = list;
            list = current.next;
        }else{
            var current = prev.next;
            prev.next = current.next;
        }
        let next = current.next,
            last = next.next;
        next.next = current;
        current.next = last;
        if(!last){ return list };
        return swapPris(list, current);
    }
    var list = {val:1,next:{val:2,next:{val:3,next:{val:4,next:null}}}}
    swapPris(list, null);

    var swapPairs = function(head) {
        if(head == null || head.next == null){
            return head;
        }
        // 获得第 2 个节点
        let next = head.next;
        // next.next = head.next.next
        // 第1个节点指向第 3 个节点，并从第3个节点开始递归
        head.next = swapPairs(next.next);
        // 第2个节点指向第 1 个节点
        next.next = head;
        // 或者 [head.next,next.next] = [swapPairs(next.next),head]
        return next;
    };

    ```
### 3. 141. 环形链表
1. 链接：https://leetcode-cn.com/problems/linked-list-cycle
2. 描述：给定一个链表，判断链表中是否有环。
        为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
3. 示例：
    ```
    //示例1
    输入：head = [3,2,0,-4], pos = 1
    输出：true
    解释：链表中有一个环，其尾部连接到第二个节点。
    
    示例 2：
    输入：head = [1,2], pos = 0
    输出：true
    解释：链表中有一个环，其尾部连接到第一个节点。
    ```
4. 解题
    1. 暴力法： 每遍历一个节点，就从头遍历之前所有节点；时间复杂度o(n^2) 空间复杂度o(1)
    2. 快慢指针
        - 两个指针 p1 和 p2 ，初始指向头节点
        - 开启循环，p1 每次推进 1 个节点，p2 每次推进 2 个节点，不断比较它们指向的节点
        - 如果出现相同，说明有环，如果不同，继续循环
    ```javascript
    var hasCycle = (head) => {
      let fastP = head
      let slowP = head
      while (fastP) { // 快指针没有指向null
        if (fastP.next == null) return false // 下一个为null了，没有环
        slowP = slowP.next // 快的前面都有节点，慢的前面当然有
        fastP = fastP.next.next // 推进2个节点
        if (slowP === fastP) return true // 快慢指针相遇，有环
      }
      return false // fastP为null了也始终不相遇
    }
    ```
### 4. 142. 环形链表 II
1. 链接：https://leetcode-cn.com/problems/linked-list-cycle-ii/
2. 描述：给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
        为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
        说明：不允许修改给定的链表
3. 示例：
    ```
    //示例1
    输入：head = [3,2,0,-4], pos = 1
    输出：tail connects to node index 1
    解释：链表中有一个环，其尾部连接到第二个节点。

    输入：head = [1,2], pos = 0
    输出：tail connects to node index 0
    解释：链表中有一个环，其尾部连接到第一个节点。
    ```
4. 解题
    2. 快慢指针
        - 时间复杂度：O(n) 空间复杂度o(1)
        - 链表开始到环起始点的位置，等于n倍的相遇点到环起始点的位置。
    ```javascript
    var detectCycle = function(head){
        let fast = head,slow=head;
        while(fast&&fast.next){
            slow = slow.next;
            fast = fast.next.next;
            if(slow==fast){
                fast = head;
                while(true){
                    if(fast == slow){
                        return fast;
                    }
                    fast = fast.next;
                    slow = slow.next;
                }
            }
        }
        return null;
    }
    ```
### 4. 142. 环形链表 II
1. 链接：https://leetcode-cn.com/problems/reverse-nodes-in-k-group
2. 描述：给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
        k 是一个正整数，它的值小于或等于链表的长度。
        如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
3. 示例：
    ```
    //示例1
    给你这个链表：1->2->3->4->5
    当 k = 2 时，应当返回: 2->1->4->3->5
    当 k = 3 时，应当返回: 3->2->1->4->5
    ```
4. 解题
    1. 时间复杂度：O(n) 空间复杂度o(1)
    ```javascript
    var reverseKGroup = function(head, k){
        if(k<=1) return head;
        let tail = head;
        for(let i = 1;i<k;i++){
            if(!tail) return head;
            if(i == k-1){
                var pretail = tail;            
            }
            tail = tail.next;
            if(!tail) return head;
        }
        //交换两个位置
        let newHead = reverse(head, pretail);
        head.next = reverseKGroup(head.next, k);
        return newHead;
    }
    function reverse(head, pretail){
        let headnext = head.next,
            tail = pretail.next;
        head.next = tail.next;
        if(head == pretail){
            tail.next = head;
        }else{
            tail.next = headnext;
            pretail.next = head;
        }
        return tail;    
    }

    ```
## 数组和链表的练习题
### 1. 26. 删除排序数组中的重复项
1. 说明：给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
        不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
2. 题解：双指针
```javascript
var removeDuplicates = function(nums){
    let j = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=nums[i-1]){
            nums[j++] = nums[i];
        }
    }
    return j;
}
```
### 2. 189. 旋转数组
1. 说明：给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
2. 题解：下解法是错误的先记录下
```javascript
var rotate = function(nums, k) {
    let i=0,len=nums.length,mid=0;
    while(i+k<len){
        let temp = nums[len-k+i];    
        nums[len-k+i] = nums[i];        
        nums[i++] = temp;
        console.log(nums);
    }
    return nums;
};
```
### 2. 21. 合并两个有序链表
1. 说明：将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
2. 题解：这道题可以使用递归实现，新链表也不需要构造新节点，我们下面列举递归三个要素
        终止条件：两条链表分别名为 l1 和 l2，当 l1 为空或 l2 为空时结束
        返回值：每一层调用都返回排序好的链表头
        本级递归内容：如果 l1 的 val 值更小，则将 l1.next 与排序好的链表头相接，l2 同理
        O(m+n)O(m+n)，mm 为 l1的长度，nn 为 l2 的长度

```javascript
var mergeTwoLists = function(l1,l2){
    if(!l1){
        return l2
    }else if(!l2){
        return l1;
    }
    if(l1.val<l2.val){
        let next = l1.next;
        l1.next = mergeTwoLists(next,l2);
        return l1;
    }else{
        let next = l2.next;
        l2.next = mergeTwoLists(l1,next);
       return l2;
    }
}
```
### 3. 88. 合并两个有序数组
1. 说明：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
2. 题解：双指针

```javascript
//分配额外的空间
var merge = function(nums1, m, nums2, n){
    let newArr = [];
    while(nums1.length&&nums2.length){
        if(nums1[0]<nums2[0]){
            newArr.push(nums1.shift());
        }else{
            newArr.push(nums2.shift());
        }
    }
    return newArr.concat(nums1, nums2);
}
//不分配空间
var merge = function(nums1,m,nums2,n){
    let len = m+n-1;
    while(n>0){
        if(nums1[m-1]>nums2[n-1]){
            nums1[len--] = nums1[--m] 
        }else{
            nums1[len--] = nums2[--n]
        }
    }
    return nums1;
}
```
