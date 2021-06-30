//hashmap 双向链表
var NodeList = function(key, value){
    this.val = value;
    this.key = key;
    this.next = this.pre = null;
}
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new NodeList();
    this.tail = new NodeList();
    this.head.next = this.tail;
    this.tail.pre = this.head; 
};
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map.has(key)) return -1;
    let node = this.map.get(key);
    //在双向链表中删除
    this.removeFromList(node);
    //在双向链表的头部插入
    this.interToListHead(node.key, node.val);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    //存在
    if(this.map.has(key)){
        let node = this.map.get(key);
        //在双向链表中删除
        this.removeFromList(node); 
    }
    this.interToListHead(key, value);
    //移除
    if(this.map.size > this.capacity){
        this.removeFromList(this.tail.pre);
    }

};
LRUCache.prototype.removeFromList = function(node) {
    node.pre.next = node.next;
    node.next.pre = node.pre;
    this.map.delete(node.key); 
};
LRUCache.prototype.interToListHead = function(key, value) {
    let node = new NodeList(key, value);
    //头部插入
    //node跟head的下一个节点建立联系
    node.next = this.head.next;
    this.head.next.pre = node;
    //node 跟 head之间建立联系；
    node.pre = this.head;
    this.head.next = node;

    this.map.set(key, node);

    return node;
};
