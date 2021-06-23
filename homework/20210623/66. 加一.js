/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length;
    while(len--){
        if(digits[len] == 9){
            digits[len] = 0
        }else{
            digits[len]++;
            break;
        }
    }
    //特殊情况
    if(digits[0]==0){
        digits[0] = 1;
        digits[digits.length] = 0;
    }
    return digits;
}
