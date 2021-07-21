// 355. 设计推特
var Twitter = function() {
    //所有的用户；
    this.userMap = new Map();

};
Twitter.prototype.postTweet = function(userId, tweetId) {
    //1.查看用户是否建立
    if(!this.userMap.has(userId)){
        this.userMap.set(userId, new User(userId));
    }
    //2. 新建一条post;
    this.userMap.set(userId, this.userMap.get(userId).post(tweetId));

};
Twitter.prototype.getNewsFeed = function(userId) {
    //1.查看用户是否建立
    if(!this.userMap.has(userId)){
        return [];
    }
    //合并k个链表 前10条
    let user = this.userMap.get(userId);
    //声明一个大根堆
    let heap = new BinaryHeap();
    //以time为比较的依据
    //添加自己的推文
    heap.push({val: user.tweet.time, listNode: user.tweet});
    //如果有关注者
    if(user.followee.keys()){
        for(let followeeId of user.followee){
            if(this.userMap[followeeId]){
                let tweet = this.userMap[followeeId].tweet;
                //qi'y
                if(tweet!=null){
                    heap.push({val: tweet.time, listNode: tweet});
                }
            }
        }
    }
    
    let ans = [];
    while(!heap.isEmpty()){
        let node = heap.pop();
        //先存储当前的值;
        ans.push(node.listNode.id);
        if(ans.length == 10){ return ans;}
        //添加下一个到堆；
        let nextNode = node.listNode.next;
        if(nextNode!=null){
            heap.push({val: nextNode.time, listNode: nextNode});
        }
    }
    return ans;    
};
Twitter.prototype.follow = function(followerId, followeeId) {
    //1.查看用户是否建立
    if(!this.userMap.has(followerId)){
        this.userMap.set(followerId, new User(followerId));
    }
    //2.查看关注者是否创建
        if(!this.userMap.has(followeeId)){
        this.userMap.set(followeeId, new User(followeeId));
    }
    //建立关注
    this.userMap.set(followerId, this.userMap.get(followerId).follow(followeeId));
};
Twitter.prototype.unfollow = function(followerId, followeeId) {
    //1.查看用户是否建立
    if(!this.userMap.has(followerId)){
        this.userMap.set(followerId, new User(followerId));
    }
    this.userMap.set(followerId, this.userMap.get(followerId).unfollow(followeeId));
};
//推文
function Tweet (id){
    this.id = id;
    this.time = Date.now();
    this.next = null;
}
//用户类
function User(id) {
    this.id = id;
    this.tweet = null; //推文放在链表；
    this.followee = new Set(); //关注者，放hashSet; 方便删除查找
    this.follow = (followeeId)=>{
        //不能关注自己
        if(followeeId != this.id){
            this.followee.add(followeeId);
        }
        return this;
    }
    this.unfollow = function unfollow(followeeId){
        //不能取关自己
        if(this.followee.has(followeeId) && followeeId!=this.id){
            this.followee.delete(followeeId);
        }
        return this;
    }
    //发表文章
    this.post = function post(tweetId){
        //插入到链表的头部
        let tweet = new Tweet(tweetId);
        tweet.next = this.tweet;
        this.tweet = tweet;
        return this;
    }
}

//大二根堆；
class BinaryHeap {
    constructor() {
        //数组存储完全二叉树；
        //从索引0开始；
        this.heap = [];
    }
    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
    isEmpty() {
        return this.heap.length == 0;
    }
    top () {
        return this.heap[0];
    }
    push(node) {
        //插入尾部；向上跟父节点做交换，直到满足堆性质；
        this.heap.push(node);
        //从最后一个索引开始；
        this.heapifyUp(this.heap.length - 1);
    }
    pop() {
        //删除堆顶1.头尾元素交换，2.删除尾部，3.此时不满足堆性质，所以向下跟子元素做交换；
        let res = this.heap[0];
        this.swap(0, this.heap.length-1);
        this.heap.pop();
        
        this.heapifyDown(0);
        //返回被删除的元素；
        return res;
    }
    heapifyUp(p) {
        //1.一直向上做交换，直到根节点或者大于父节点（小根堆）2.父节点为(p-1)>>1 右位移一位
        while(p>0) {
            let fa = (p-1) >> 1;   //father的索引
            
            if(this.heap[p].val>this.heap[fa].val){
                this.swap(p, fa);
                p = fa;
            }
            else break;
        }
    }
    heapifyDown(p) {
        //1. 左子节点索引p*2+1, 右子节点p*2+2;
        //2. 小根堆，对比子节点小的作交换；
        let child = p * 2+1;
        let len = this.heap.length;
        //出界停止；
        while(child < len) {
            let otherChild = p * 2 + 2;
            //比较当前的两个节点；
            if(otherChild<len && this.heap[otherChild].val>this.heap[child].val){
                child = otherChild;
            }
            if(this.heap[p].val<this.heap[child].val){
                this.swap(p, child);
                p = child;
                child = p * 2 + 1;
            }
            else break;
        }
         
    }
}
