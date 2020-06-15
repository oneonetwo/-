# 数据结构算法训练 - 准备
## 电脑设置
1. Google
2. - MAC: iTerm2+zsh(oh my zsh);
   - Windows: Microsoft new terminal `https://www.jianshu.com/p/4b2b7074d9e2`;
3. VSCode; java:intelliJ; Python:Pycharm;
    - LeetCode plugin(VSCode & IntelliJ)
    
    
## Code Style
1. [javascript code style](https://google.github.io/styleguide/jsguide.html)
## LeetCode
1. leetcode-cn.com和题解
2. leetcode.com和Discuss board 上国际站看最新的思路

## 指法和小操作
1. home, end（行头，行尾）
2. Word单词，选单词，选整行 
3. IDE自动补全
4. Top tips for<IDE-name>
5. [宇宙最强vscode教程](https://segmentfault.com/a/1190000017949680)
   
## 自顶向下的编程方式
1. [clean code](https://markhneedham.com/blog/2008/09/15/clean-code-book-review/)
2. 写代码方式（新闻稿的方式）： 最关键的title写到上面，其他的私有函数，细节函数用一些子函数放在下面；
3. 验证回文串125
```javascript
function isPalindrome(str){
    //以高层次主干逻辑为主， 像森林先枝干再叶子
    //1. filter out number & char 2. reverse and compare 
    //过滤非字母非数字
    let filteredStr = _filterNonNumberAndChar(str);
    //反转字符串
    let reversedStr = _reverseStr(filteredStr);
   
    return reversedStr.toLowerCase() === str.toLowerCase();
}
function _filterNonNumberAndChar(str){
    return str.replace(/[^A-Za-z0-9]/g,'');
}
function _reverseStr(str){
    return str.split('').reverse().join('');
}

```
## [时间复杂度](https://www.zhihu.com/question/21387264)  空间复杂度
- <img src="https://static.prnasia.com/pro/gift/obiaoge.png" width="60%" alt="时间复杂度曲线图" title="时间复杂度曲线图"/>     

#### Big O notation
1. O(1): Constant Complexity 常数复杂度
2. O(logn): Logarithmic Complexity 对数复杂度
3. O(n): Linear Complexity 线性时间复杂度
4. O(n^2): N Square Complexity 平方
5. O(n^3): N Square Complexity 立方
6. O(2^n): Exponential Growth 指数
7. O(n!): Factorial 阶乘
```javascript
//1. O(1): Constant Complexity 常数复杂度
let n = 1000;

//2. O(logn): Logarithmic Complexity 对数复杂度
for(let i=0;i<n;i=i^2){
    console.log(i); 
}
//3. O(n): Linear Complexity 线性时间复杂度
for (let i=1;i<n;i++) {
    console.log(i);
}
//4. O(n^2): N Square Complexity 平方
for (let i=1;i<n;i++) {
    for(let j=1;j<n;j++){
        console.log(i,j);
    }
}
//5. O(n^3): N Square Complexity 立方
//三层嵌套
//6. O(2^n): Exponential Growth 指数
function fib(n){
    if(n<=2) return n;
    return fib(n-1)+fib(n-2);
}
//7. O(n!): Factorial 阶乘

```
#### 递归条件下：分析时间复杂度
1. 递归树：递归顺序的树形结构
2. 分析斐波拉契数列：
    - 求斐波拉契数列的第N项   `Fib: 0,1,1,2,3,5,8,13,21,...`     `F(n) = F(n-1)+F(n-2)`
    - 例子Fib(6),
        - 第一现象： 每多展开一层，运行的节点数就是上面一层的两倍；第二层2节点，第三层4节点，第四层8个节点...；所有每个节点数也就是执行的次数是按照指数级递增的；最后就是变成 2^n；
        - 第二个现象： 有重复的节点出现在执行的状态树里面了  
    - <img src="https://static.prnasia.com/pro/gift/diguishu.png" width="60%" alt="状态树" title="状态树" />

3. [主定理（master Theorem）](https://zh.wikipedia.org/wiki/%E4%B8%BB%E5%AE%9A%E7%90%86)： 用来解决所有的递归的函数的时间复杂度
4. 工程中主要用到的有四种：二分查找，二叉树的遍历，二维有序矩阵，归并排序；  
    - <img src="https://static.prnasia.com/pro/gift/master1.png" width="60%" alt="master theorem" title="master theorem" />    
    - 二叉树遍历：前序，中序，后序时间复杂度是多少？
        -  为`O(n)`,N代表二叉树里面的树的节点总数；不管是前序中序后序，在遍历二叉树时，每个节点访问一次且仅访问一次
    - 图的遍历： 时间复杂度是多少？
        - `O(n)`图里面的每个节点只访问一次 
    - 搜索算法： DFS深度优先，BFS广度优先  
        - O(n)  也是遍历每个节点
    - 二分查找： 时间复杂度  O(logn)
    





























