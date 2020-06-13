
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
## 时间复杂度  空间复杂度
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





























