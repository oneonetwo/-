/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
        this.capacity = k+1;
        this.arr = new Array(this.capacity);
        this.front = 0; // 头部指向第 1 个存放元素的位置 //插入时，先减，再赋值 //删除时，索引 +1（注意取模）
        this.rear= 0;   // 尾部指向下一个插入元素的位置 // 插入时，先赋值，再加 // 删除时，索引 -1（注意取模）
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
        if(this.isFull()){ return false }
        this.front = (this.front-1+this.capacity)%this.capacity
        this.arr[this.front] = value;
        return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
        if(this.isFull()){ return false }
        this.arr[this.rear] = value;
        this.rear = (this.rear+1) % this.capacity;
        return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
        if(this.isEmpty()){ return false }
        this.front = (this.front+1) % this.capacity;
        return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
        if(this.isEmpty()) { return false};
        this.rear = (this.rear-1+this.capacity) % this.capacity;
        return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
        if(this.isEmpty()){ return -1};
        return this.arr[this.front];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
        if(this.isEmpty()){ return -1};
        // 当 rear 为 0 时防止数组越界, rear指向的是下一个插入的元素的位置，元素为空，需要-1；
        return this.arr[(this.rear-1+this.capacity)%this.capacity];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
        return this.front === this.rear;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
return (this.rear+1) % this.capacity === this.front;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
