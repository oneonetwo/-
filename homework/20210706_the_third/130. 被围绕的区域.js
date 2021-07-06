/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let m = board.length;
    let n = board[0].length;
    // let visit = new Array(m).fill().map(_=>new Array(n).fill('X'));
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            //查看矩阵边上的元素，等于O的 并且没被访问的元素。
            if((i==0||j==0||i==m-1||j==n-1) && board[i][j]=='O'){
                    find(i, j);
            }else{
                continue;
            }
        }
    }

    //把board中不为1的全部变为‘X’, 等于1的变为‘O’
     for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
           board[i][j] =  board[i][j]==1?'O':'X';
        }
    }
    return;

    function find(sx, sy){
        if(sx<0||sy<0||sx>=m||sy>=n || board[sx][sy]!='O' ){
            return;
        }
        //标记已访问
        board[sx][sy] = 1;
        find(sx+1, sy);
        find(sx-1, sy);
        find(sx, sy-1);
        find(sx, sy+1);
    }
};
