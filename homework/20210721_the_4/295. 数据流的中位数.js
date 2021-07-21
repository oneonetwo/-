/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    //升序数据
    //1. 大根堆放入小的一半的值；小根堆放入大的一半的值；
    //2. 添加一个数 1要比大小2要比长短；
    //3. 取中位数，如果是偶数则大堆头加小堆头/2, 如果是奇数则拿出来长的那个堆的堆头；
    this.topHeap = new TopHeapBinary();
    this.bottomHeap = new BottomHeapBinary();
};
MedianFinder.prototype.addNum = function(num) {
    //1. 先插入，在维护两边的长度差为1
    let top = this.topHeap.top();
    let bot = this.bottomHeap.top();
    //大于前半段插入大堆
    if(num>top) this.bottomHeap.push(num);
    else this.topHeap.push(num);
    //维护两个长度差为1;
    while(Math.abs(this.topHeap.size() - this.bottomHeap.size())>1){
       if(this.topHeap.size()>this.bottomHeap.size()){
            let res = this.topHeap.pop();
            this.bottomHeap.push(res)
       }else{
            let res = this.bottomHeap.pop();
            this.topHeap.push(res)
       }
    }
};
MedianFinder.prototype.findMedian = function() {
    let topSize = this.topHeap.size();
    let botSize = this.bottomHeap.size();
    if(topSize == botSize){
        return (this.topHeap.top() + this.bottomHeap.top()) / 2;
    }else if(topSize>botSize){
        return this.topHeap.top() 
    }else{
        return this.bottomHeap.top() 
    }
};
//大根堆
class TopHeapBinary {
    constructor(){
        this.heap = [];
    }
    push(num){
        //末尾添加元素向上做heapify;
        this.heap.push(num);
        this.heapifyUp(this.heap.length-1);
    }
    pop(){  
        let res = this.heap[0];
        this.swap(0, this.heap.length-1);
        this.heap.pop();
        this.heapifyDown(0);
        return res;
    }
    isEmpty() {
        return this.heap.length == 0;
    }
    top(){
        return this.heap[0];
    }
    size(){
        return this.heap.length;
    }
    heapifyDown(fa){
        let child = fa*2+1;
        let len = this.heap.length;
        while(child<len){
            let otherChild = fa*2+2;
            if(otherChild<len && this.heap[otherChild]>this.heap[child]){
                child = otherChild;
            }
            if(this.heap[fa] < this.heap[child]){
                this.swap(fa, child);
                fa = child;
                child = fa*2+1;
            }
            else break;
        }
    }
    heapifyUp(p){
        while(p>0){
            let fa = (p-1)>>1;//父索引；
            if(this.heap[p] > this.heap[fa]){
                this.swap(p, fa);
                p = fa;
            }
            else break;
        }
    }
    swap(i, j){
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp; 
    }
}

//小根堆
class BottomHeapBinary {
    constructor(){
        this.heap = [];
    }
    push(num){
        //末尾添加元素向上做heapify;
        this.heap.push(num);
        this.heapifyUp(this.heap.length-1);
    }
    pop(){  
        let res = this.heap[0];
        this.swap(0, this.heap.length-1);
        this.heap.pop();
        this.heapifyDown(0);
        return res;
    }
    isEmpty() {
        return this.heap.length == 0;
    }
    top(){
        return this.heap[0];
    }
    size(){
        return this.heap.length;
    }
    heapifyDown(fa){
        let child = fa*2+1;
        let len = this.heap.length;
        while(child<len){
            let otherChild = fa*2+2;
            if(otherChild<len && this.heap[otherChild]<this.heap[child]){
                child = otherChild;
            }
            if(this.heap[fa] > this.heap[child]){
                this.swap(fa, child);
                fa = child;
                child = fa*2+1;
            }
            else break;
        }
    }
    heapifyUp(p){
        while(p>0){
            let fa = (p-1)>>1;//父索引；
            if(this.heap[p] < this.heap[fa]){
                this.swap(p, fa);
                p = fa;
            }
            else break;
        }
    }
    swap(i, j){
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp; 
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
