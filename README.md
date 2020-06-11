# 数据结构算法训练
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

