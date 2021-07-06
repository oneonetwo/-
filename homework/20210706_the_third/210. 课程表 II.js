/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
 // 1. 初态
    // 2.加边同时附加度数 
    // 3. 拓扑排序基于BFS, 需要队列 
    let edges = new Array(numCourses).fill(0).map(_=>[]);
    let inDeg = new Array(numCourses).fill(0);
    for(let pre of prerequisites){
        let ai = pre[0], bi = pre[1];
        addEdge(bi, ai);
    }
    // 最后如果访问的点的长度小于课程数
    let ans = topSort();
    if(ans.length<numCourses) return [];
    return ans;



    function topSort() {
        let order = [];//记录访问的点,
        let queue = [];
        //先从入度为0的节点出发
        for(let i=0;i<numCourses;i++){
            if(inDeg[i] == 0){
                queue.push(i);
            }
        }
        //执行BFS;
        while(queue.length){
            let x = queue.shift();
            order.push(x);
            for(let y of edges[x]){
                inDeg[y]--;
                //如果入度边==0，则入栈
                if(inDeg[y] == 0) {
                    queue.push(y);
                }
            }
            
        }
        return order;
    }

    function addEdge(x, y){
        edges[x].push(y);
        inDeg[y]++;
    }
};
